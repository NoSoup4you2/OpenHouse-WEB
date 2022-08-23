import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-visitor-sign-in',
    templateUrl: './visitor-sign-in.componenet.html',
    styleUrls: ['./visitor-sign-in.componenet.scss'],
})
export class VisitorSignInComponent implements OnInit {

    @Output() onEdit = new EventEmitter<{ DocId: string }>();

    PropertyTitle: string = '1509 Avenida De Nogales';
    AgentFirstName: string = 'Top';
    AgentLastName: string = 'Agent';
    AgentTitle: string = 'Agent Title';
    img = 'https://listing-images.homespotter.com/145/l2x/369132/369132383-1.jpg'

    constructor() {
    }

    ngOnInit() {
    }


}