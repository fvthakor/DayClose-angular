import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Pincode } from 'src/app/models';
import { PincodeService } from 'src/app/services';

@Component({
  selector: 'app-create-pincode',
  templateUrl: './create-pincode.component.html',
  styleUrls: ['./create-pincode.component.scss']
})
export class CreatePincodeComponent implements OnInit {
  @Input() pincode: Pincode;
  title = 'Create Pincode'
  buttonText = 'Create'
  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private pincodeService: PincodeService
  ) {
    this.createForm();
  }

  isFormSubmitted = false;
  ngOnInit(): void {
    this.angForm.patchValue(this.pincode);
    this.title = this.pincode._id ? 'Edit City' : 'Create City';
    this.buttonText = this.pincode._id ? 'Update' : 'Create';
  }

  angForm: FormGroup;
  createForm() {
    this.angForm = this.fb.group({
      pincode: ['', [Validators.required]],
      city: ['', [Validators.required]],
    });
  }

  submitForm() {
    this.isFormSubmitted = true
    if (this.angForm.invalid) {
      return;
    }
    const formData = this.angForm.value
    if (this.pincode._id) {
      this.pincodeService.update(this.pincode._id, formData).subscribe(response => {
        this.activeModal.close('form submit');
      })
    } else {
      this.pincodeService.create(formData).subscribe(response => {
        this.activeModal.close('form submit');
      })
    }

  }

  get form() {
    return this.angForm.controls;
  }

}
