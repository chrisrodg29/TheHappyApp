import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gratitude-exercise',
  templateUrl: './gratitude-exercise.component.html',
  styleUrls: ['./gratitude-exercise.component.css']
})
export class GratitudeExerciseComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSave() {
    // Save to Persistence Layer
    this.router.navigate(['/dashboard/selection']);
  }

}
