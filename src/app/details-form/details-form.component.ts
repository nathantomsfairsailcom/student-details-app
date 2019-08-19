import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DetailsModel } from 'src/app/models';

@Component({
  selector: 'sd-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.scss']
})
export class DetailsFormComponent implements OnInit {

  @Output()
  submitForm = new EventEmitter<DetailsModel>();

  public details: DetailsModel;
  public detailsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.resetFormGroup();
  }

  public onSubmit(studentDetails) {
    if(this.detailsForm.valid) {
      this.details = {
        name: studentDetails.name,
        email: studentDetails.email,
        degreeTitle: studentDetails.degreeTitle,
        currentYearOfStudy: studentDetails.currentYear
      };
      this.submitForm.emit(this.details);
    }
    console.log('*nt: this.details: ', this.details);
  }

  public onReset() {
    this.resetFormGroup();
  }

  private resetFormGroup() {
    this.detailsForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      degreeTitle: ['', [Validators.required]],
      currentYear: [1, [Validators.required]],
      terms: [false, [Validators.required]]
    });
  }

}
