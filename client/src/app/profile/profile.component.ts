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

  constructor(
    public sessionService: SessionService, 
    public router: Router
  ) {}

  ngOnInit() {
  }

  logout() {
    this.sessionService.logout().subscribe();
  }
}

