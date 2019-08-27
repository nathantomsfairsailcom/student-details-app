import { Component } from '@angular/core';

@Component({
  selector: 'sd-header',
  template: `
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img src="assets/images/sage-logo.svg" height="30" class="d-inline-block align-top" alt="">
      </a>
    </nav>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {}
