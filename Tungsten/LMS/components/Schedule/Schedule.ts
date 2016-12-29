import { Component, AfterViewInit, Inject, Input } from '@angular/core';
import { ScheduleSegment } from '../../interfaces/schedulesegment';
import { ScheduleService } from '../../services/schedule.service';


@Component({
    selector: 'lms-schedule-app',
    template:
    `<h3>Schedule</h3><canvas id="schedule-canvas"></canvas>`
})

export class Schedule implements AfterViewInit {
    private scheduleSegments: ScheduleSegment[];

    @Input('group-id') groupId: string;

    constructor( @Inject(ScheduleService) scheduleService: ScheduleService) {
        scheduleService.getSchedule(this.groupId)
            .subscribe(Segments => {
                this.scheduleSegments = Segments;
            },
            error => console.error(error));
    }

    ngAfterViewInit(): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('schedule-canvas');
        let svg: CanvasRenderingContext2D = canvas.getContext('2d');
        let height: number = canvas.height;
        let width: number = canvas.width;
    }
}
