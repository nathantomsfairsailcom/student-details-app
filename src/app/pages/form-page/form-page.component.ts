// Angular
import { Component, Inject } from '@angular/core';

// Services
import { DetailsService } from 'src/app/services';

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
  addDetails(): void {

    // TODO get this from form
    const details = {
      name: 'King Edward',
      email: 'king@potato.org'
    };

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
