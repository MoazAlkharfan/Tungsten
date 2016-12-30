import { Component, AfterViewInit, Inject, Input } from '@angular/core';
import { ScheduleSegment } from '../../interfaces/schedulesegment';
import { ScheduleService } from '../../services/schedule.service';


@Component({
    selector: 'lms-schedule-app',
    template:
    `<h3>Schedule</h3><canvas style="width: 100%" id="schedule-canvas"></canvas>`
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


    drawSchedule(segments: ScheduleSegment[]): void {
        this.setupCanvas();

        this.drawFrame();

        let days: number[] = [1, 2, 3, 4, 5];
        for (let day of days) {
            this.renderDay(day, segments.filter((segment) => segment.Day == day));
        }
    }

    setupCanvas(): void {
        // DOM Setup
        this.htmlCanvas = <HTMLCanvasElement>document.getElementById('schedule-canvas');
        this.ctx = this.htmlCanvas.getContext('2d');

        // Style Setup
        this.htmlCanvas.style.width = '100%';
        this.htmlCanvas.style.height = '100%';

        // Scaling Workaround
        this.width = this.ctx.canvas.width = this.htmlCanvas.width =  this.htmlCanvas.offsetWidth;
        this.height = this.ctx.canvas.height = this.htmlCanvas.height = this.htmlCanvas.offsetHeight;
    }

    drawFrame(): void {
        
    }

    renderDay(day: number, segments: ScheduleSegment[]): void {

        console.log("[ScheduleComponent] Day[" + day + "] rendering started. Segments passed:");
        console.log(segments);

        this.ctx.save();

        let colWidth = this.width / 5;
        this.ctx.translate(colWidth * (day - 1), 0);

        this.ctx.strokeRect(0, 0, colWidth, this.height);
        segments.forEach((segment): void => {
            // TODO: Render segments!
        });

        this.ctx.restore();
    }
}
