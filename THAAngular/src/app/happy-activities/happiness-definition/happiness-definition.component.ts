import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-happiness-definition',
  templateUrl: './happiness-definition.component.html',
  styleUrls: ['./happiness-definition.component.css']
})
export class HappinessDefinitionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSave() {
    // Save to Persistence Layer
    this.router.navigate(['/dashboard/selection']);
  }

}
