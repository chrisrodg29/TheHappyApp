import { Component, OnInit, HostBinding, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('modalCloseButton') modalCloseButton: ElementRef;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.modalCloseButton.nativeElement.click();
    this.router.navigate(['/dashboard/selection']);
  }

}
