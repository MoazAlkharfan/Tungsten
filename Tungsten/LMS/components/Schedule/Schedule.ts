import { Component, OnInit, Inject } from '@angular/core';
import { ScheduleSegment } from '../../interfaces/schedulesegment';
import { ScheduleService } from '../../services/schedule.service';


@Component({
    selector: 'lms-schedule-app',
    templateUrl: './LMS/components/Schedule/Schedule.html'
})

export class Schedule implements OnInit {
    private scheduleSegments: ScheduleSegment[];

    constructor( @Inject(ScheduleService) private scheduleService: ScheduleService) { }

    ngOnInit(): void {
        this.scheduleService.getSchedule("idgoeshere")
            .subscribe(Segments => {
                this.scheduleSegments = Segments;
            },
            error => console.error(error));
    }
}