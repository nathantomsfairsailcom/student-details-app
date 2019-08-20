// Angular
import { Component, Inject } from '@angular/core';

// Services
import { DetailsService } from 'src/app/services';
import { DetailsModel } from 'src/app/models';

@Component({
  selector: 'sd-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent {
  constructor(@Inject(DetailsService) private detailsService: DetailsService) {}

  /**
   * Send details from the form to the backend.
   */
  addDetails(details: DetailsModel): void {
    this.detailsService.addDetails(details).subscribe(
      (result: any) => {
        console.log(result);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
