import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { SessionService } from '../../services/session';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  username: string;
  email: string;
  password: string;

  constructor(private sessionService:SessionService, private router:Router) { }

  ngOnInit() {
  }

  signup(username:string, password:string, email:string){
    console.log("signup....");
    this.sessionService.signup(username, password, email).subscribe( (user:any) => {
      console.log(`WELCOME USER ${user.username}, register OK`);
      console.log(user);
      this.router.navigate(['/profile']);
    });
  }
}

