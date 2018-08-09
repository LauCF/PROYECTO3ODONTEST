import { QuestionService } from './../../services/question';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  user: any;
  diagnosisArray: Array<any>;

  constructor(
    public sessionService: SessionService, 
    public router: Router
  ) {
  }
  
  ngOnInit() {
    this.myDiagnosis();
  }

  logout() {
    this.sessionService.logout().subscribe();
  }

  myDiagnosis() {
    this.sessionService.listDiagnosis().subscribe(diagnosisArray => {
    this.diagnosisArray = diagnosisArray;
 });
}

}


@Component({
  selector: 'date-pipe',
  template: `<div>
    <p>Today is {{today | date}}</p>
    <p>Or if you prefer, {{today | date:'fullDate'}}</p>
    <p>The time is {{today | date:'h:mm a z'}}</p>
  </div>`
 })
 // Get the current date and time as a date-time value.
 export class DatePipeComponent {
   today: number = Date.now();
 }

