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
  public onSubmit(formDetails) {
    console.log(formDetails)
    if (this.detailsForm.valid) {
      this.details = {
        name: formDetails.name,
        email: formDetails.email,
        degreeTitle: formDetails.degreeTitle,
        currentYearOfStudy: formDetails.currentYear,
        desiredJobType: formDetails.desiredJob,
        workLocation: this.findLocation(formDetails.workLocation),
        event: formDetails.event
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

  private resetFormGroup() {
    this.detailsForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      degreeTitle: ['', []],
      currentYear: [null, []],
      desiredJob: ['', []],
      workLocation: [null, []],
      event: ['', []],
      terms: [false, [Validators.required]]
    });
  }

}
