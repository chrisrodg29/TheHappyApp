import { Component, OnInit } from '@angular/core';
import { SatisfactionAssessmentService } from '../shared/assessment-services/satisfaction-assessment.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  initialAssessmentTaken = false;

  constructor(private satAssessServ: SatisfactionAssessmentService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.satAssessServ.getAnswers()) {
      this.initialAssessmentTaken = true;
    }
    this.satAssessServ.assessmentFinish.subscribe(
      (data: boolean) => this.initialAssessmentTaken = data
    );
  }

  onClickFreddy() {
    if (this.satAssessServ.getAnswers()) {
      // open mood rating component
    } else {
      this.router.navigate(['assessments/satisfaction-scale'], { relativeTo: this.route });
    }
  }

  onAssessmentFinish() {
    console.log('triggered');
    this.initialAssessmentTaken = true;
  }

}
