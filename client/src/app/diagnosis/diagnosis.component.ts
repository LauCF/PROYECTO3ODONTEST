import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { SessionService } from "../../services/session";
import { QuestionService } from "./../../services/question";

@Component({
  selector: "app-diagnosis",
  templateUrl: "./diagnosis.component.html",
  styleUrls: ["./diagnosis.component.css"]
})
export class DiagnosisComponent implements OnInit {
  diaguser;

  constructor(
    private sessionService: SessionService,
    private questionService: QuestionService,
    private aRoute: ActivatedRoute,
    private router: Router
  ) {
    this.aRoute.params.subscribe(params => {
      this.questionService.get(params.id).subscribe(diaguser => {
        this.diaguser = diaguser;
      });
    });
  }

  ngOnInit() {}
}
