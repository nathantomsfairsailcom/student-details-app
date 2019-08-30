// Angular
import { Component, Inject, OnInit } from '@angular/core';

// Services
import { CandidatesService } from 'src/app/services/candidates-service';
import { CandidatesModel } from 'src/app/models';

@Component({
  selector: 'sd-admin-page',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-lg-10 col-xl-10 mx-auto">
          <div class="card card-signin">
            <div class="card-body">
              <h5 class="card-title text-center">Candidates</h5>
              <sd-people-form class="form" [candidates]="candidates">
              </sd-people-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  candidates: CandidatesModel;
  inProgress = false;

  constructor(
    @Inject(CandidatesService)
    private candidatesServices: CandidatesService
  ) {}

  ngOnInit(): void {
    this.getCandidates();
  }

  /**
   * Fetch from the backend.
   */
  getCandidates(): void {
    this.inProgress = true;

    this.candidatesServices.getCandidates().subscribe(
      (result: any) => {
        this.candidates = result;
        this.inProgress = false;
      },
      (error: any) => {
        console.error('Error message: ' + error.message);
        this.inProgress = false;
      }
    );
  }
}
