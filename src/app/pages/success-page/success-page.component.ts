// Angular
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sd-success',
  template: `
    <div class="container page-container">
      <h2 class="success-page__message">
        Success!
      </h2>

      <div class="success-page__return-button-container">
        <button (click)="onReturn()" type="reset" class="btn btn-light">
          Return
        </button>
      </div>
    </div>
  `,
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
