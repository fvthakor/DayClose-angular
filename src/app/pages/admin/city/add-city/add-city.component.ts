import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { City, County } from 'src/app/models';
import { CityService, CountyService } from 'src/app/services';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.scss']
})
export class AddCityComponent implements OnInit {
  @Input() city: City;
  title = 'Create City'
  buttonText = 'Create'
  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private cityService: CityService,
    private countyService: CountyService
  ) {
    this.createForm();
  }
  isFormSubmitted = false;
  ngOnInit(): void {
    this.angForm.patchValue(this.city);
    this.title = this.city._id ? 'Edit City' : 'Create City';
    this.buttonText = this.city._id ? 'Update' : 'Create';
    this.getCounty();
  }

  angForm: FormGroup;
  createForm() {
    this.angForm = this.fb.group({
      name: ['', [Validators.required]],
      county: ['', [Validators.required]]
    });
  }

  submitForm() {
    this.isFormSubmitted = true
    if (this.angForm.invalid) {
      return;
    }
    const formData = this.angForm.value
    if (this.city._id) {
      this.cityService.update(this.city._id, formData).subscribe(response => {
        this.activeModal.close('form submit');
      })
    } else {
      this.cityService.create(formData).subscribe(response => {
        this.activeModal.close('form submit');
      })
    }

  }

  get form() {
    return this.angForm.controls;
  }

  cities: County[] = []
  getCounty() {
    this.countyService.getAllData().subscribe(response => {
      this.cities = response;
    })
  }

}
