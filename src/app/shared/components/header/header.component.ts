import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'sd-header',
  template: `
    <nav class="navbar navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="assets/images/sage-logo.svg" height="30" class="d-inline-block align-top" alt="">
        </a>
        <span class="logout navbar-text" *ngIf="authService.isLoggedIn" (click)="logOut()">
          Logout
        </span>
      </div>
    </nav>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.setLoggedIn();
  }

  logOut() {
    this.authService.logout();
    this.setLoggedIn();
  }

  private setLoggedIn() {
    this.isLoggedIn = this.authService.isLoggedIn;
  }

}
