import { Component, AfterViewInit, Inject, Input } from '@angular/core';
import { ScheduleSegment } from '../../interfaces/schedulesegment';
import { ScheduleService } from '../../services/schedule.service';

/**
 * To use the component; make sure you have it and its services listed in.
 * Then simply use it by using its selector and providing the [groupId] params.
 * <lms-schedule-app [groupId]="GroupId"></lms-schedule-app> where "GroupID" is a
 * public property of the parent component (page).
 */

@Component({
    selector: 'lms-schedule-app',
    template:
    `<canvas style="width: 80vw; height: 60vw;" id="schedule-canvas">Your browser does not support HTML5 Canvas.</canvas>`
})

export class Schedule implements AfterViewInit {

    @Input()
    public groupId: string;

    constructor( @Inject(ScheduleService) private scheduleService: ScheduleService) { }

    ngAfterViewInit(): void {
        console.log("[ScheduleComponent] GroupID Passed: " + this.groupId);
        this.scheduleService.getSchedule(this.groupId)
            .subscribe(Segments => this.drawSchedule(Segments),
            error => console.error(error));
    }

    // DOM Variables
    private htmlCanvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    // Schedule Size Information
    private height: number;
    private width: number;

    private hourHeight: number;
    private scheduleOffset: number;

    public scheduleStart: string = "07:00:00";
    public scheduleEnd: string = "17:00:00";

    drawSchedule(segments: ScheduleSegment[]): void {

        this.setupCanvas();
        this.drawFrame();

        for (let day = 1; day <= 5; day++)
            this.renderDay(day - 1, segments.filter((segment) => segment.Day == day));

    }

    setupCanvas(): void {

        // DOM Setup
        this.htmlCanvas = <HTMLCanvasElement>document.getElementById('schedule-canvas');
        this.ctx = this.htmlCanvas.getContext('2d');

        // Scaling Workaround
        this.width = this.ctx.canvas.width = this.htmlCanvas.width = this.htmlCanvas.offsetWidth;
        this.height = this.ctx.canvas.height = this.htmlCanvas.height = this.htmlCanvas.offsetHeight;

        // Fill-White
        this.ctx.fillStyle = "#ffffff";
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    drawFrame(): void {

        let rulerWidth: number = 32;
        this.ctx.strokeRect(0, 0, rulerWidth, this.height);

        this.scheduleOffset = this.parseTimespan(this.scheduleStart);
        let scheduleEnd: number = this.parseTimespan(this.scheduleEnd);

        let dayLength: number = scheduleEnd - this.scheduleOffset;
        console.log("Length of day calculated to be: " + dayLength.toString());

        this.hourHeight = this.height / dayLength;

        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#000000";
        this.ctx.font = "8px Arial";
        this.ctx.beginPath();

        for (let hour = 1; hour < dayLength; hour++) {
            this.ctx.moveTo(rulerWidth * 3 / 4, hour * this.hourHeight);
            this.ctx.lineTo(rulerWidth, hour * this.hourHeight);
            this.ctx.fillText(hour + this.scheduleOffset + ":00", 4, hour * this.hourHeight)
        }

        this.ctx.stroke();

        this.ctx.translate(rulerWidth, 0);
        this.width -= rulerWidth;
    }

    renderDay(day: number, segments: ScheduleSegment[]): void {

        console.log("[ScheduleComponent] Day[" + day + "] rendering started. Segments passed:");
        console.log(segments);

        this.ctx.save();

        let colWidth = this.width / 5;
        this.ctx.translate(colWidth * day, 0);

        this.ctx.strokeRect(0, 0, colWidth, this.height);
        segments.forEach((segment): void => {

            let segmentStart: number = this.parseTimespan(segment.StartTime) - this.scheduleOffset;
            let segmentEnd: number = this.parseTimespan(segment.EndTime) - this.scheduleOffset;
            let segmentLength: number = segmentEnd - segmentStart;

            this.ctx.fillStyle = "#ff0000";

            this.ctx.fillRect(0, segmentStart * this.hourHeight, colWidth, segmentLength * this.hourHeight);
            this.ctx.strokeRect(0, segmentStart * this.hourHeight, colWidth, segmentLength * this.hourHeight);


            this.ctx.fillStyle = "#000000";
            this.ctx.font = "8px Arial";

            this.ctx.fillText(" " + segment.StartTime, 0, segmentStart * this.hourHeight);
            this.ctx.fillText(" " + segment.EndTime, 0, segmentEnd * this.hourHeight);

            this.ctx.font = "12px Arial";
            this.ctx.fillText(" " + segment.CourseName, 0, (segmentStart + segmentEnd) / 2 * this.hourHeight);

        });

        this.ctx.restore();
    }

    parseTimespan(timespan: string): number {
        let parts = timespan.split(':');
        return Number(parts[0]) + Number(parts[1]) / 60;
    }
}
