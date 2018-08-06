import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class QuestionService {
  BASEURL: string = "http://localhost:3000";
  options:object = {withCredentials:true};
  constructor(private http: Http) {}

  getList() {
    return this.http
      .get(`${this.BASEURL}/question`, this.options)
      .pipe(map(res => res.json()));
  }

  answersYes(answers) {
    console.log(answers);
    return this.http
      .post(`${this.BASEURL}/diagnosis`, answers, this.options)
      .pipe(map(res => res.json()));
  }
}
