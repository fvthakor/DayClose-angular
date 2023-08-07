import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { County } from 'src/app/models';
import { CountyService } from 'src/app/services';

@Component({
  selector: 'app-add-county',
  templateUrl: './add-county.component.html',
  styleUrls: ['./add-county.component.scss']
})
export class AddCountyComponent implements OnInit {
  @Input() county: County;
  title = 'Create County'
  buttonText = 'Create'
  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private countyService: CountyService
  ) { 
    this.createForm();
  }
  isFormSubmitted = false;
  ngOnInit(): void {
    this.angForm.patchValue(this.county);
    this.title = this.county._id ? 'Edit County' : 'Create County';
    this.buttonText = this.county._id ? 'Update' : 'Create';
  }


  angForm: FormGroup;
  createForm() {
    this.angForm = this.fb.group({
      name: ['', [Validators.required]],
    });
  }

  submitForm() {
    this.isFormSubmitted = true
    if (this.angForm.invalid) {
      return;
    }
    const formData = this.angForm.value
    if (this.county._id) {
      this.countyService.update(this.county._id, formData).subscribe(response => {
        this.activeModal.close('form submit');
      })
    } else {
      this.countyService.create(formData).subscribe(response => {
        this.activeModal.close('form submit');
      })
    }

  }

  get form() {
    return this.angForm.controls;
  }

}
