import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CourseService } from '../../../../../services/course.service';
import { Segment } from '../../../../../classes/segment';

@Component({
    templateUrl: './lms/pages/dashboard/pages/delete/removesegment/removesegment.component.html'
})
export class RemoveSegmentPage implements OnInit {
    private segment: Segment;

    constructor(
        @Inject(ActivatedRoute) private _ActivatedRoute: ActivatedRoute,
        @Inject(CourseService) private _CourseService: CourseService,
        @Inject(Router) private _Router: Router
    ) { };

    ngOnInit() {
        this._ActivatedRoute.data.subscribe((data: { segment: Segment }) => {
            this.segment = data.segment;
        });
    }

    Remove() {
        // TODO: segment.service.remove
    }
}