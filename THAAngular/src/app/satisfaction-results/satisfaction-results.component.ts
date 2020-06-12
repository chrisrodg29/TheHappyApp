import { Component, OnInit } from '@angular/core';
import { SatisfactionResultsService } from '../shared/assessment-services/satisfaction-results.service';
import { SatisfactionAssessmentService } from '../shared/assessment-services/satisfaction-assessment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-satisfaction-results',
  templateUrl: './satisfaction-results.component.html',
  styleUrls: ['./satisfaction-results.component.css']
})
export class SatisfactionResultsComponent implements OnInit {

  result: string;
  explanation: string;

  constructor(private assesServ: SatisfactionAssessmentService, private resultsServ: SatisfactionResultsService, private router: Router) { }

  ngOnInit(): void {
    this.resultsServ.calculateResults(this.assesServ.getAnswers());
    this.result = this.resultsServ.descriptors[this.resultsServ.range];
    this.explanation = this.resultsServ.explanations[this.resultsServ.range];
    this.resultsServ.emitScore();
  }

  onStart() {
    this.resultsServ.emitFinished();
    this.router.navigate(['/dashboard/selection']);
  }

}
