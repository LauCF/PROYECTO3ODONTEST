import { SessionService } from "./../../services/session";
import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { QuestionService } from "../../services/question";
import { Router } from "../../../node_modules/@angular/router";

interface Id {
  _id: string;
  user: string;
  diagnosis: string;
}

@Component({
  selector: "app-question-list",
  templateUrl: "./question-list.component.html",
  styleUrls: ["./question-list.component.css"]
})
export class QuestionListComponent implements OnInit {
  questions: Array<any>;
  answers_yes = [];
  answers_no = [];
  activeTab: number = 0;
  testFinished: boolean = false;

  constructor(
    private questionService: QuestionService,
    private SessionService: SessionService,
    private router: Router
  ) {
    this.getAll();
  }

  ngOnInit() {
    this.SessionService.isLogged().subscribe(() => {});
  }

  getAll() {
    this.questionService.getList().subscribe(data => (this.questions = data));
  }

  onSelectionChange(question) {
    if (this.answers_no.indexOf(question.tag) != -1) {
      this.answers_no.splice(this.answers_no.indexOf(question.tag), 1);
    }
    if (this.answers_yes.indexOf(question.tag) == -1) {
      this.answers_yes.push(question.tag);
    }
    this.checkTestStatus();
  }

  onDeselectionChange(question) {
    if (this.answers_yes.indexOf(question.tag) != -1) {
      this.answers_yes.splice(this.answers_yes.indexOf(question.tag), 1);
    }
    if (this.answers_no.indexOf(question.tag) == -1) {
      this.answers_no.push(question.tag);
    }
    this.checkTestStatus();
  } 

  submit() {
    console.log(this.answers_yes);
    this.questionService
      .answersYes(this.answers_yes)
      .subscribe((diaguser: Id) =>
        this.router.navigate(["/diagnosis", diaguser._id])
      );
  }

  goToPrevious() {
    this.testFinished = false
    if (this.activeTab > 0) {
      this.activeTab -= 1;
    }
  }

  checkTestStatus(){
    console.log(this.activeTab, this.questions.length-2)
    if (this.activeTab===this.questions.length-2) {
      this.testFinished=true;
    } 
    if (this.activeTab<=this.questions.length-2){
      this.activeTab += 1
    }
  }
}
