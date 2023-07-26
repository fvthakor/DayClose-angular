import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { City, Pincode, Store } from 'src/app/models';
import { CityService, StoreService } from 'src/app/services';

@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.component.html',
  styleUrls: ['./create-store.component.scss']
})
export class CreateStoreComponent implements OnInit {
  @Input() store: Store;
  title = 'Create Store'
  buttonText = 'Create'
  cities: City[] = [];
  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private StoreService: StoreService,
    private cityService: CityService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    this.createForm();
  }
  isFormSubmitted = false;
  ngOnInit(): void {
    this.angForm.patchValue(this.store);
    this.title = this.store._id ? 'Edit Store' : 'Create Store';
    this.buttonText = this.store._id ? 'Update' : 'Create';
    this.getCities();                 
  }

  angForm: FormGroup;
  createForm() {
    this.angForm = this.fb.group({
      name: ['', [Validators.required]],
      number: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      pincode: ['', [Validators.required]],
    });
  }

  submitForm() {
    this.isFormSubmitted = true
    if (this.angForm.invalid) {
      return;
    }
    const formData = this.angForm.value
    if (this.store._id) {
      this.StoreService.update(this.store._id, formData).subscribe(response => {
        this.activeModal.close('form submit');
      })
    } else {
      this.StoreService.create(formData).subscribe(response => {
        this.activeModal.close('form submit');
      })
    }

  }

  get form() {
    return this.angForm.controls;
  }

  getCities() {
    this.cityService.getAllData().subscribe(response => {
      this.cities = response;
      this.changeDetectorRef.detectChanges();
      // console.log(this.cities);
    })
  }
  pincodes: Pincode[] = []
  cityChanged() {
    //console.log(this.angForm.value.city);
    const cityFilters = this.cities.filter(item => item._id === this.angForm.value.city)
    this.pincodes = cityFilters.length > 0 && cityFilters[0].pincodes ? cityFilters[0].pincodes : [];
    this.changeDetectorRef.detectChanges();
  }
}
