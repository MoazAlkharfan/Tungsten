import { Component, Input, animate, trigger, state, style, transition, OnInit } from '@angular/core';

@Component({
    selector: 'dropdownbox',
    templateUrl: './lms/components/dropdownbox/dropdownbox.html',
    styleUrls: ['./lms/components/dropdownbox/dropdownbox.css'],
    animations: [
        trigger('openClose', [
            state('open', style({ height: '*', opacity: 1})),
            state('close', style({ height: '0px', opacity: 0 })),
            transition('open => close', [animate('300ms', style({ opacity: 0, height: '0px' }))]),
            transition('close => open', [animate('300ms', style({ opacity: 1, height: '*' }))])
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