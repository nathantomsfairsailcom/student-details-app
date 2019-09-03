// Angular
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { DetailsService } from 'src/app/services';

// Models
import { DetailsModel, WorkLocationModel } from 'src/app/models';

@Component({
  selector: 'sd-form-page',
  template: `
    <div class="alert alert-danger text-uppercase" *ngIf="errorMessage">
      {{ errorMessage }}
    </div>
    <sd-details-form
      [workLocations]="workLocations"
      (submitForm)="addDetails($event)"
    >
    </sd-details-form>
  `
})
export class FormPageComponent implements OnInit {
  workLocations: WorkLocationModel[];
  inProgress = false;
  errorMessage: string = '';

  constructor(
    @Inject(DetailsService) private detailsService: DetailsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getWorkLocations();
  }

  /**
   * Fetch Work Locations from the backend.
   */
  getWorkLocations(): void {
    this.inProgress = true;

    this.detailsService.getWorkLocations().subscribe(
      (result: any) => {
        this.workLocations = result;
        this.inProgress = false;
      },
      (error: any) => {
        console.error('Error message: ' + error.error.message);
        this.errorMessage = error.error.message;

        this.inProgress = false;
      }
    );
  }

  /**
   * Send details from the form to the backend.
   */
  addDetails(details: DetailsModel): void {
    this.inProgress = true;

    this.detailsService.addDetails(details).subscribe(
      (result: any) => {
        this.inProgress = false;
        this.router.navigate(['success']);
      },
      (error: any) => {
        console.error('Error message: ' + error.error.message);
        this.errorMessage = error.error.message;
        this.inProgress = false;
      }
    );
  }
}
