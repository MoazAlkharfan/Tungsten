import { Component, AfterViewInit, Inject, Input, ViewChild } from '@angular/core';
import { ScheduleSegment } from '../../interfaces/schedulesegment';
import { ScheduleService } from '../../services/schedule.service';


@Component({
    selector: 'lms-schedule-app',
    template: `<canvas id="schedule-canvas"></canvas>`
})

export class Schedule implements AfterViewInit {
    private scheduleSegments: ScheduleSegment[];

    @Input("group-id") groupId: string;

    constructor( @Inject(ScheduleService) scheduleService: ScheduleService) {
        scheduleService.getSchedule(this.groupId)
            .subscribe(Segments => {
                this.scheduleSegments = Segments;
            },
            error => console.error(error));
    }

    ngAfterViewInit(): void {
        var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("schedule-canvas");
        var svg: CanvasRenderingContext2D = canvas.getContext("2d");
        var height: number = canvas.height;
        var width: number = canvas.width;
    }
}