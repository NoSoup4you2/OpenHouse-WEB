import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-visitor-sign-in',
  templateUrl: './visitor-sign-in.component.html',
  styleUrls: ['./visitor-sign-in.component.scss']
})
export class VisitorSignInComponent implements OnInit {

  @Output() onEdit = new EventEmitter<{ DocId: string }>();

    PropertyTitle: string = '1509 Avenida De Nogales';
    AgentFirstName: string = 'Top';
    AgentLastName: string = 'Agent';
    AgentTitle: string = 'Agent Title';
    img = 'https://listing-images.homespotter.com/145/l2x/369132/369132383-1.jpg'

    signinForm!: FormGroup;

    constructor() {
      this.signinForm = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        phone: new FormControl('', Validators.required)
      });
    }

    ngOnInit() {
    }

    onSignIn() {
      console.log(this.signinForm.value);
      //the logic of the signin (call to backend API)
    }

}
