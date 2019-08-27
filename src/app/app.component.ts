import { Component } from '@angular/core';

@Component({
  selector: 'sd-root',
  template: `
    <sd-header></sd-header>
    <router-outlet></router-outlet>
    <!--<sd-footer></sd-footer>-->
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'student-details-app';
}
