import { Component, Inject, OnInit } from '@angular/core';
import { CourseService } from '../../../../../services/course.service';
import { Segment } from '../../../../../classes/segment';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './lms/pages/dashboard/pages/create/createsegment/createsegment.component.html'
})
export class CreateSegmentPage implements OnInit {
    private segment: Segment;
    constructor(
        @Inject(CourseService) private _CourseService: CourseService,
        @Inject(Router) private router: Router,
        @Inject(ActivatedRoute) private _ActivatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
        let id = this._ActivatedRoute.snapshot.params['id'];
        if (!id)
            this.router.navigate(['/dashboard']);

        this.segment.CourseId = id;
    }

    Create() {
        // TODO: segment.service.createsegment
    }
}