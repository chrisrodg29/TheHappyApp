import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-happy-list',
  templateUrl: './happy-list.component.html',
  styleUrls: ['./happy-list.component.css']
})
export class HappyListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSave() {
    // Save to Persistence Layer
    this.router.navigate(['/dashboard/selection']);
  }

}
