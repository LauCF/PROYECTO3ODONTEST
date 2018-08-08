import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";

const {BASEURL} = environment;

@Injectable({
  providedIn: "root"
})
export class QuestionService {
  options:object = {withCredentials:true};
  constructor(private http: Http) {}

  getList() {
    return this.http
      .get(`${BASEURL}/question`, this.options)
      .pipe(map(res => res.json()));
  }

  answersYes(answers) {
    return this.http
      .post(`${BASEURL}/diagnosis`, answers, this.options)
      .pipe(map(res => res.json()));
  }

  get(id) {
    return this.http
      .get(`${BASEURL}/diagnosis/${id}`)
      .pipe(map(res => res.json()));
  }
  
}
