import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { environment } from "../environments/environment";

import { map, catchError } from "rxjs/operators";
import { Observable } from "../../node_modules/rxjs";
import { of } from "rxjs";

const { BASEURL } = environment;

interface UserObject {
  username: string;
  email: string;
  password: string;
}

@Injectable()
export class SessionService {
  user: UserObject;
  options: object = { withCredentials: true };

  constructor(private http: Http) {
    this.isLogged().subscribe();
  }

  isLogged() {
    return this.http.get(`${BASEURL}/api/auth/currentuser`, this.options).pipe(
      map((res: Response) => {
        this.user = res.json();
        console.log(`Automatically login ${this.user.username}`);
        return this.user;
      }),
      catchError(e => {
        console.log("You have to login first!");
        return of(e);
      })
    );
  }

  errorHandler(e) {
    console.log("SessionServiceError");
    console.log(e.message);
    console.log(e);
    return e;
  }

  signup(
    username: string,
    password: string,
    email: string
  ): Observable<object> {
    return this.http
      .post(
        `${BASEURL}/api/auth/signup`,
        { username, password, email },
        this.options
      )
      .pipe(
        map((res: Response) => {
          let data = res.json();
          this.user = data.user;
          return this.user;
        }),
        catchError(e => of(this.errorHandler(e)))
      );
  }

  login(username: string, password: string): Observable<object> {
    return this.http
      .post(`${BASEURL}/api/auth/login`, { username, password }, this.options)
      .pipe(
        map((res: Response) => {
          let user = res.json();
          this.user = user;
          return this.user;
        }),
        catchError(e => of(this.errorHandler(e)))
      );
  }

  logout() {
    return this.http.get(`${BASEURL}/api/auth/logout`, this.options).pipe(
      map((res: Response) => {
        this.user = null;
      }),
      catchError(e => of(this.errorHandler(e)))
    );
  }

  listDiagnosis() {
    return this.http
      .get(`${BASEURL}/profile`, this.options)
      .pipe(map(res => res.json()));
}

}
