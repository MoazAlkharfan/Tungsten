import { Component, AfterViewInit, Inject, Input } from '@angular/core';
import { ScheduleSegment } from '../../interfaces/schedulesegment';
import { ScheduleService } from '../../services/schedule.service';


@Component({
    selector: 'lms-schedule-app',
    template:
    `<canvas style="width: 100%" id="schedule-canvas">Your browser does not support HTML5 Canvas.</canvas>`
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

    public dayStart: string = "08:00:00";
    public dayEnd: string = "17:00:00";

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

        let dayLength: number = this.parseTimespan(this.dayEnd) - this.parseTimespan(this.dayStart);
        console.log("Length of day calculated to be: " + dayLength.toString());

        let hourHeight: number = this.height / dayLength;

        this.ctx.textBaseline = "middle"; 
        this.ctx.fillStyle = "#000000";
        this.ctx.font = "8px Arial";
        this.ctx.beginPath();

        for (let hour = 1; hour <= dayLength; hour++)
        {
            this.ctx.moveTo(rulerWidth * 3 / 4, hour * hourHeight);
            this.ctx.lineTo(rulerWidth, hour * hourHeight);
            this.ctx.fillText(hour.toString() + ":00", 4, hour * hourHeight)
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
            // TODO: Render segments!
        });

        this.ctx.restore();
    }

    parseTimespan(timespan: string): number {
        let parts = timespan.split(':');
        return Number(parts[0]) + Number(parts[1]) / 60;
    }
}
