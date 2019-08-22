// Angular
import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Models
import { DetailsModel, WorkLocationModel } from 'src/app/models';

@Component({
  selector: 'sd-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.scss']
})
export class DetailsFormComponent implements OnInit {

  @Input() workLocations: WorkLocationModel[];

  @Output() submitForm = new EventEmitter<DetailsModel>();

  public details: DetailsModel;
  public detailsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.resetFormGroup();
  }

  /**
   * Emit the contents of the form to the parent when the form is submitted.
   */
  public onSubmit(details) {
    if (this.detailsForm.valid) {
      this.details = {
        name: details.name,
        email: details.email,
        degreeTitle: details.degreeTitle,
        currentYearOfStudy: details.currentYear,
        desiredJobType: details.desiredJob,
        preferredWorkLocation: this.findLocation(details.workLocation)
      };
      this.submitForm.emit(this.details);
    }
  }

  /**
   * Find a Work Location in our stored array by ID.
   */
  private findLocation(id: string): WorkLocationModel {
    return this.workLocations.find(location => location.id === id);
  }

  public onReset() {
    this.resetFormGroup();
  }

  private resetFormGroup() {
    this.detailsForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      degreeTitle: ['', []],
      currentYear: [null, []],
      desiredJob: ['', []],
      workLocation: [null, []],
      terms: [false, [Validators.required]]
    });
  }

}
