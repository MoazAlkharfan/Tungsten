import { Component, Input, animate, trigger, state, style, transition, OnInit } from '@angular/core';

@Component({
    selector: 'dropdownbox',
    templateUrl: './lms/components/dropdownbox/dropdownbox.html',
    styleUrls: ['./lms/components/dropdownbox/dropdownbox.css'],
    animations: [
        trigger('openClose', [
            state('open', style({ height: '*'})),
            state('close', style({ height: '0' })),
            transition('open => close', [animate('150ms ease-out', style({ opacity: 0 }))]),
            transition('close => open', [animate('150ms ease-in'), style({ opacity: 0})])
        ])
    ]
})
export class DropdownBox implements OnInit {
    @Input('title') Title: string;
    @Input('content') Content: any[]; 
    @Input('content-type') ContentType: any;
    isOpen: string;

    constructor() {
        this.isOpen = 'close';
    }

    ngOnInit() {
        this.isOpen = 'close';
    }

    OpenClose() {
        if (this.isOpen === 'open')
            this.isOpen = 'close';
        else if (this.isOpen === 'close')
            this.isOpen = 'open';
    }
}