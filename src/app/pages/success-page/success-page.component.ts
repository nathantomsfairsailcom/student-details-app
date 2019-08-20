// Angular
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sd-success',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.scss']
})
export class SuccessPageComponent {

  constructor(private router: Router) {}

  /**
   * Return to the form, when the return button is clicked.
   */
  onReturn(): void {
    this.router.navigate(['']);
  }
}
