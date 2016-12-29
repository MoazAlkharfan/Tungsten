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
        console.log(this.groupId);
        this.scheduleService.getSchedule(this.groupId)
            .subscribe(Segments => this.drawSchedule(Segments),
            error => console.error(error));
    }

    drawSchedule(segments: ScheduleSegment[]): void {

        let htmlCanvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('schedule-canvas');
        let ctx: CanvasRenderingContext2D = htmlCanvas.getContext('2d');

        htmlCanvas.style.width = '100%';
        htmlCanvas.style.height = '100%';

        htmlCanvas.width = htmlCanvas.offsetWidth;
        htmlCanvas.height = htmlCanvas.offsetHeight;

        ctx.canvas.width = htmlCanvas.width;
        ctx.canvas.height = htmlCanvas.height;

        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        ctx.font = "1em Arial";

        segments.forEach((scheduleSegment) => {
            ctx.fillText(scheduleSegment.CourseName, 10, 50);
        })
    }
}
