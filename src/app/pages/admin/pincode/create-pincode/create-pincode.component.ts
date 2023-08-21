import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Pincode, City } from 'src/app/models';
import { CityService, PincodeService } from 'src/app/services';

@Component({
  selector: 'app-create-pincode',
  templateUrl: './create-pincode.component.html',
  styleUrls: ['./create-pincode.component.scss']
})
export class CreatePincodeComponent implements OnInit {
  @Input() pincode: Pincode;
  title = 'Create Zipcode'
  buttonText = 'Create'
  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private pincodeService: PincodeService,
    private cityService: CityService
  ) {
    this.createForm();
  }

  isFormSubmitted = false;
  ngOnInit(): void {
    this.angForm.patchValue({ ...this.pincode, city: typeof this.pincode.city === 'string' ? this.pincode.city : this.pincode.city._id });
    this.getCity();
    this.title = this.pincode._id ? 'Edit Zipcode' : 'Create Zipcode';
    this.buttonText = this.pincode._id ? 'Update' : 'Create';
  }

  angForm: FormGroup;
  createForm() {
    this.angForm = this.fb.group({
      pincode: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
      city: ['', [Validators.required]],
    });
  }
  cities: City[] = []
  getCity() {
    this.cityService.getAllData().subscribe(response => {
      this.cities = response;
    })
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
