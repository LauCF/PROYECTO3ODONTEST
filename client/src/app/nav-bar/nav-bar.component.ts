import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public sessionService:SessionService) { }

  ngOnInit() {
  }

  logout(){
    this.sessionService.logout().subscribe();
  }
}

// import { Component } from '@angular/core';
// import { SessionService } from '../services/session';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

// export class AppComponent {
//   title = 'app';
  
//   constructor(public sessionService:SessionService) { }

//   logout(){
//     this.sessionService.logout().subscribe();
//   }
// }