import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  @ViewChild('modalCloseButton') modalCloseButton: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  // add to registration functionality before route navigation:
  // this.modalCloseButton.nativeElement.click();

}
