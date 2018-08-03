import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '../../node_modules/@angular/router';
import { routes } from './routes';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { SessionService } from '../services/session';
import { QuestionService } from '../services/question';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    QuestionListComponent,
    DiagnosisComponent
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],

  providers: [SessionService, QuestionService],
  bootstrap: [AppComponent]
})

export class AppModule { }