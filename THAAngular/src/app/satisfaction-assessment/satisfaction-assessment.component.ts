import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SatisfactionAssessmentService } from '../shared/assessment-services/satisfaction-assessment.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-satisfaction-assessment',
  templateUrl: './satisfaction-assessment.component.html',
  styleUrls: ['./satisfaction-assessment.component.css']
})
export class SatisfactionAssessmentComponent implements OnInit {

  prompt: string;
  questionId = 0;
  rating: number;

  constructor(private satAssessServ: SatisfactionAssessmentService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.prompt = this.satAssessServ.getQuestion(this.questionId);
    this.satAssessServ.initiateAnswers();
  }

  onClickNext() {
    if (this.questionId < this.satAssessServ.getQuestions().length - 1) {
      this.satAssessServ.saveAnswer(this.questionId - 1, this.rating);
      ++this.questionId;
      this.prompt = this.satAssessServ.getQuestion(this.questionId);
      this.rating = this.satAssessServ.getAnswer(this.questionId - 1);
    } else {
      // save answers to persistence layer
      this.satAssessServ.finish();
      this.router.navigate(['/dashboard/results']);
    }
  }

  onClickBack() {
    if (this.questionId > 0) {
      this.satAssessServ.saveAnswer(this.questionId - 1, this.rating);
      --this.questionId;
      this.prompt = this.satAssessServ.getQuestion(this.questionId);
      this.rating = this.satAssessServ.getAnswer(this.questionId - 1);
    } else {
      this.satAssessServ.deleteAnswers();
      this.router.navigate(['/dashboard/selection']);
    }
  }

}
