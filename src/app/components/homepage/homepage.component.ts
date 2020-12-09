import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  showRegisterForm: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showRegisterFormAction() {
    this.showRegisterForm = true;
  }

  showLoginFormAction() {
    this.showRegisterForm = false;
  }

}
