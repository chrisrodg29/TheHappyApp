import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SatisfactionAssessmentService {

  assessmentFinish: EventEmitter<boolean> = new EventEmitter();

  questions: string[] = [
    'Simply rate how much you agree with the next 5 statements. Don\'t overthink it! Just answer as honestly as you can.',
    'In most ways, my life is close to my ideal.',
    'I am satisfied with my life.',
    'The conditions of my life are excellent',
    'So far, I have the important things I want in life.',
    'If I could live my life over, I would change almost nothing.'
  ];
  answers: number[];

  constructor() { }

  getQuestions() {
    return this.questions;
  }

  getAnswers() {
    return this.answers;
  }

  initiateAnswers() {
    this.answers = [4, 4, 4, 4, 4];
  }

  deleteAnswers() {
    this.answers = undefined;
  }

  getQuestion(id: number) {
    return this.questions[id];
  }

  getAnswer(id: number) {
    return this.answers[id];
  }

  saveAnswer(id: number, rating: number) {
    this.answers[id] = rating;
  }

  finish() {
    this.assessmentFinish.emit(true);
  }


}
