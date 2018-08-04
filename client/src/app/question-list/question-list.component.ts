import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { QuestionService } from '../../services/question';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})

export class QuestionListComponent implements OnInit {

  questions: Array<any>;
  answers_yes = [];
  answers_no = [];

  constructor(private questionService: QuestionService, private router:Router) {
    this.getAll();
   }

  ngOnInit() {
  }

  getAll() {
    this.questionService.getList().subscribe(data => this.questions = data);
  }

  onSelectionChange(question) {
    if(this.answers_no.indexOf(question.tag) != -1) {
      this.answers_no.splice(this.answers_no.indexOf(question.tag),1);
    }

    if(this.answers_yes.indexOf(question.tag) == -1) {
      this.answers_yes.push(question.tag);
    }
  }

  onDeselectionChange(question) {
    if(this.answers_yes.indexOf(question.tag) != -1) {
      this.answers_yes.splice(this.answers_yes.indexOf(question.tag),1);
    }

    if(this.answers_no.indexOf(question.tag) == -1) {
      this.answers_no.push(question.tag);
    }
  }
  
  submit() {
    console.log(this.answers_yes)
    this.questionService.answersYes(this.answers_yes).subscribe(() => this.router.navigate(["/question-list"]))
  }

}