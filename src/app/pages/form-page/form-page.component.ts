// Angular
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { DetailsService } from 'src/app/services';

// Models
import { DetailsModel } from 'src/app/models';

@Component({
  selector: 'sd-form-page',
  templateUrl: './form-page.component.html'
})
export class FormPageComponent {

  constructor(
    @Inject(DetailsService) private detailsService: DetailsService,
    private router: Router) {}

  /**
   * Send details from the form to the backend.
   */
  addDetails(details: DetailsModel): void {
    this.detailsService.addDetails(details).subscribe(
      (result: any) => {
        this.router.navigate(['success']);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
