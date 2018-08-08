import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { HomeComponent } from './home/home.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';

export const routes: Routes = [
  // { path: '', redirectTo:'home', pathMatch:'full' },
  { path: '', component: HomeComponent },
  { path:'signup', component: SignupComponent },
  { path:'login', component: LoginComponent },
  { path:'profile', component: ProfileComponent },
  { path:'question-list', component: QuestionListComponent },
  { path:'diagnosis/:id', component: DiagnosisComponent},
  { path: '**', redirectTo:'', pathMatch:'full'}
];


  