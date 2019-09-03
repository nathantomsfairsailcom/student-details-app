// Angular
import { Component, OnInit, Input } from '@angular/core';

// Models
import { CandidatesModel } from 'src/app/models';

@Component({
  selector: 'sd-people-form',
  template: `
    <div class="table-responsive">
      <table class="table borderless table-hover">
        <thead>
          <tr>
            <th scope="col-sm">Name</th>
            <th scope="col-sm">Email</th>
            <th scope="col-sm">Degree Title</th>
            <th scope="col-sm">Year Of Study</th>
            <th scope="col-sm">Desired Job Type</th>
            <th scope="col-sm">Work Location</th>
            <th scope="col-sm">Event</th>
          </tr>
        </thead>
        <tbody *ngFor="let candidate of candidates">
          <tr>
            <td>{{ candidate.name }}</td>
            <td>{{ candidate.email }}</td>
            <td>{{ candidate.degreeTitle }}</td>
            <td class="number">{{ candidate.currentYearOfStudy }}</td>
            <td>{{ candidate.desiredJobType }}</td>
            <td>
              {{ candidate.preferredLocation }} -
              {{ candidate.preferredBusinessUnit }}
            </td>
            <td>{{ candidate.event }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styleUrls: ['./people-form.component.scss']
})
export class PeopleFormComponent {
  @Input() candidates: CandidatesModel;
}
