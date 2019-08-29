import { Component } from '@angular/core';

@Component({
  selector: 'sd-header',
  template: `
    <nav class="navbar navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="assets/images/sage-logo.svg" height="30" class="d-inline-block align-top" alt="">
        </a>
      </div>
    </nav>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {}
