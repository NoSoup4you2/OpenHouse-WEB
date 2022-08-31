import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {avatar} from './avatar-image'

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
    myAvatar = avatar;
    showAgentQuestion: boolean = false;
    showFoundHowQuestion: boolean = false;
    showpreaproved: boolean = false;
    showmoveother : boolean = false;

    signinForm: FormGroup;

    constructor() {
      this.signinForm = new FormGroup({
        firstname: new FormControl('', Validators.required),
        lastname: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        phone: new FormControl('', Validators.required),
        propertyID: new FormControl('', Validators.required),
        workingAgentYN: new FormControl('', Validators.required),
        workingAgentName:new FormControl('', Validators.required),
        workingAgentPhone:new FormControl('', Validators.required),
        workingAgentEmail:new FormControl('', Validators.required),
        workingAgentCompany:new FormControl('', Validators.required),
        buyer:new FormControl('', Validators.required),
        seller :new FormControl('', Validators.required),
        rentorown: new FormControl('', Validators.required),
        foundvia: new FormControl('', Validators.required),
        foundviatext: new FormControl('', Validators.required),
        cashorfinance: new FormControl('', Validators.required),
        preaproved: new FormControl('', Validators.required),
        preaprovedamount: new FormControl('', Validators.required),
        movetimeframe: new FormControl('', Validators.required),
        movetimeother: new FormControl('', Validators.required),
        transmotivations: new FormControl('', Validators.required)
      });
    }

    ngOnInit() {
    }

    onSignIn() {
      console.log(this.signinForm.value);
      //the logic of the signin (call to backend API)
    }

    regForProperty(event?: any){
      console.log('This is a submit Request')
      console.log(event.value);
    }

    showAgentInfo(answer : boolean){
      console.log('We have a selection to show')
      if(answer === true) {
        this.showAgentQuestion = true;
      } else {
        this.showAgentQuestion = false;

      }
    }

    hideEQ(key:any ){
      console.log('We have a selection to hide')
      this.showAgentQuestion = false;
    }

    mcAnswerChanged(event: boolean){
      this.showFoundHowQuestion = event
      console.log(event);
    }

    ppAnswerChanged(event: boolean) {
      console.log("Value changed to : " + event);
      this.showpreaproved = event

    }
    showMoveChanged(event: boolean) {
      this.showmoveother = event

    }

    openURL(url: string){
      console.log('Open Web Page : ' + url)
    }

    confirmShowRegistrants(a? : any) {}

    showTTPanel() {}

    showZillowReviewPanel(){}

    showRSPanel() {}

    closeSignInForm(){}
}
