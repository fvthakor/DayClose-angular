import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { City, Skill, Store, Pincode, DocumentType, User, County } from 'src/app/models';
import { AuthService, ConfirmPasswordValidator, UserModel, UserType } from 'src/app/modules/auth';
import { CityService, CountyService, DocumentService, SkillService, StoreService, UserService } from 'src/app/services';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  @Input() user: UserModel;
  registrationForm: FormGroup;
  hasError: boolean;
  isLoading$: Observable<boolean>;

  // private fields
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

  formData = new FormData();

  user$: Observable<UserType>;
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private cityService: CityService,
    private changeDetectorRef: ChangeDetectorRef,
    private documentTypeService: DocumentService,
    private skillService: SkillService,
    private storeService: StoreService,
    private auth: AuthService,
    private userService: UserService,
    public activeModal: NgbActiveModal,
    private countyService: CountyService
  ) { 
    this.isLoading$ = this.authService.isLoading$;
    // redirect to home if already logged in
    
  }

  cities: City[] = [];
  documentTypes: DocumentType[] = [];
  
  skills: Skill[] = [];
  stores: Store[] = [];
  ngOnInit(): void {
    this.initForm();
    this.getCounties();
    this.getDocumentType();
    this.getSkills();
    this.getStores();
    this.user$ = this.auth.currentUserSubject.asObservable();
  }

  getCity(user:any){
    this.registrationForm.patchValue({
      city: user.city,
      pincode: user.pincode,
      address: user.address,
      store: user.store,
      county: user.county
    });
    return '';
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registrationForm.controls;
  }

  initForm() {
    this.registrationForm = this.fb.group(
      {
        //role: ['', Validators.compose([Validators.required])],
        emplyeeId: ['', Validators.compose([Validators.required])],
        firstName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100),]),],
        middleName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100),]),],
        lastName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100),]),],
        userName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100),]),],
        phoneNumber: ['', Validators.compose([Validators.required]),],
        email: ['', Validators.compose([Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(320),]),],
        address: ['', Validators.compose([Validators.required]),],
        county: ['', Validators.compose([Validators.required]),],
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
        // agree: [false, Validators.compose([Validators.required])],
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
  counties: County[] = [];
  getCounties() {
    this.countyService.getAllData().subscribe(response => {
      this.counties = response;
      this.changeDetectorRef.detectChanges();
      if(this.registrationForm.value.county && this.registrationForm.value.county !== ''){
        this.getCities();
      }
    })
  }

  getCities() {
    this.cityService.getCountyWiseData(this.registrationForm.value.county).subscribe(response => {
      this.cities = response;
      this.changeDetectorRef.detectChanges();
      // console.log(this.cities);
    })
  }
  pincodes: Pincode[] = []
  cityChanged() {
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
    
    this.userService.register(this.formData).subscribe(response => {
      this.activeModal.close('form submit');
    })
    // const newUser = new UserModel();
    // newUser.setUser(result);
    // const registrationSubscr = this.authService
    //   .registration(this.formData, newUser)
    //   .pipe(first())
    //   .subscribe((user: UserModel) => {
    //     if (user) {
    //       this.router.navigate(['/']);
    //     } else {
    //       this.hasError = true;
    //     }
    //   });
    // this.unsubscribe.push(registrationSubscr);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

}
