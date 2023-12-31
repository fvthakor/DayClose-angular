import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ConfirmPasswordValidator } from './confirm-password.validator';
import { UserModel } from '../../models/user.model';
import { first } from 'rxjs/operators';
import { City, DocumentType, Pincode, Skill, Store } from 'src/app/models';
import { CityService, DocumentService, SkillService, StoreService } from 'src/app/services';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit, OnDestroy {
  registrationForm: FormGroup;
  hasError: boolean;
  isLoading$: Observable<boolean>;

  // private fields
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

  formData = new FormData();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private cityService: CityService,
    private changeDetectorRef: ChangeDetectorRef,
    private documentTypeService: DocumentService,
    private skillService: SkillService,
    private storeService: StoreService,
  ) {
    this.isLoading$ = this.authService.isLoading$;
    // redirect to home if already logged in
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }
  cities: City[] = [];
  documentTypes: DocumentType[] = [];
  skills: Skill[] = [];
  stores: Store[] = [];
  ngOnInit(): void {
    this.initForm();
    this.getCities();
    this.getDocumentType();
    this.getSkills();
    this.getStores();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registrationForm.controls;
  }

  initForm() {
    this.registrationForm = this.fb.group(
      {
        role: ['employee', Validators.compose([Validators.required])],
        emplyeeId: ['', Validators.compose([Validators.required])],
        firstName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100),]),],
        middleName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100),]),],
        lastName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100),]),],
        userName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100),]),],
        phoneNumber: ['', Validators.compose([Validators.required]),],
        email: ['', Validators.compose([Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(320),]),],
        address: ['', Validators.compose([Validators.required]),],
        city: ['', Validators.compose([Validators.required]),],
        pincode: ['', Validators.compose([Validators.required]),],
        password: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100),]),],
        cPassword: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100),]),],
        documentType: ['', Validators.compose([Validators.required]),],
        documentNumber: ['', Validators.compose([Validators.required]),],
        documentFront: ['', Validators.compose([Validators.required]),],
        documentBack: ['', Validators.compose([Validators.required]),],
        skill: ['', Validators.compose([Validators.required]),],
        store: ['', Validators.compose([Validators.required]),],
        remark1: [''],
        remark2: [''],
        employeePhoto: ['', Validators.compose([Validators.required])],
        agree: [false, Validators.compose([Validators.required])],
      },
      {
        validator: ConfirmPasswordValidator.MatchPassword,
      }
    );
  }

  getStores() {
    this.storeService.getAllData().subscribe(response => {
      this.stores = response;
      this.changeDetectorRef.detectChanges();
    });
  }

  getDocumentType() {
    this.documentTypeService.getAllData().subscribe(response => {
      this.documentTypes = response;
      this.changeDetectorRef.detectChanges();
    });
  }

  getSkills() {
    this.skillService.getAllData().subscribe(response => {
      this.skills = response;
      this.changeDetectorRef.detectChanges();
    });
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
    console.log(this.registrationForm.value.city);
    const cityFilters = this.cities.filter(item => item._id === this.registrationForm.value.city)
    this.pincodes = cityFilters.length > 0 && cityFilters[0].pincodes ? cityFilters[0].pincodes : [];
    this.changeDetectorRef.detectChanges();
  }

  onFileSelected(event: Event, type: string) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) {
      return;
    }
    const file: File = input.files[0];
    this.formData.append(`${type}`, file);
  }

  submit() {
    this.hasError = false;
    const result: {
      [key: string]: string;
    } = {};
    Object.keys(this.f).forEach((key) => {
      if (!(key == 'documentFront' || key == 'documentBack' || key == 'employeePhoto')) {
        this.formData.append(`${key}`, this.f[key].value)
      }
      result[key] = this.f[key].value
    });
    const newUser = new UserModel();
    newUser.setUser(result);
    const registrationSubscr = this.authService
      .registration(this.formData, newUser)
      .pipe(first())
      .subscribe((user: UserModel) => {
        if (user) {
          this.router.navigate(['/']);
        } else {
          this.hasError = true;
        }
      });
    this.unsubscribe.push(registrationSubscr);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

}
