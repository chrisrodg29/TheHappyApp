import { Injectable, EventEmitter } from '@angular/core';
import { SatisfactionAssessmentService } from './satisfaction-assessment.service';

@Injectable({
  providedIn: 'root'
})
export class SatisfactionResultsService {

  range: number;
  score: number;
  scoreEmitter: EventEmitter<number> = new EventEmitter();
  finishedReading: EventEmitter<boolean> = new EventEmitter();
  descriptors: string[] = ['Potentially Depressed', 'Unhappy', 'Not-so-happy', 'Happy', 'Very Happy', 'Extremely Happy'];
  explanations: string[] = [
    'The Happy App can help, but don\'t be afraid to reach out for help from therapy and other useful resources.',
    'There is definitely room for improvement in your happiness levels, and The Happy App can definitely help!',
    'The Happy App can definitely help you increase your happiness levels even further!',
    'The Happy App can help you sustain your already high happiness levels.',
    'The Happy App may not improve your happiness levels, but it can give you fun ideas to enjoy the happiness you have!',
  ];

  constructor(private satAssessService: SatisfactionAssessmentService) { }

  calculateResults(results: number[]) {
    let sum = 0;
    for (let answer of results) {
      sum += answer;
    }
    // calculate range
    if (sum <= 12) {
      this.range = 0;
    } else if (sum <= 17) {
      this.range = 1;
    } else if (sum <= 22) {
      this.range = 2;
    } else if (sum <= 27) {
      this.range = 3;
    } else if (sum <= 31) {
      this.range = 4;
    } else if (sum <= 35) {
      this.range = 5;
    }
    // calculate score
    this.score = Math.round(sum / 3.5);
  }

  emitScore() {
    this.scoreEmitter.emit(this.score);
  }

  emitFinished() {
    this.finishedReading.emit();
  }
}
