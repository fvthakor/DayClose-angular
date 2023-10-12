import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Banner } from 'src/app/models';
import { BannerService } from 'src/app/services';

@Component({
  selector: 'app-add-banner',
  templateUrl: './add-banner.component.html',
  styleUrls: ['./add-banner.component.scss']
})
export class AddBannerComponent implements OnInit {
  @Input() banner: Banner;
  title = 'Create Banner'

  buttonText = 'Create'

  formData = new FormData();

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private bannerService: BannerService,
    private changeDetectorRef: ChangeDetectorRef,
    //private categoryService: CategoryService,
    //private userService: UserService
  ) { }

  ngOnInit(): void {
    this.createForm();
    
    this.angForm.patchValue(this.banner);
    this.title = this.banner._id ? 'Edit Banner' : 'Create Banner';
    this.buttonText = this.banner._id ? 'Update' : 'Create';
  }
  bannerImage :any = null
  isFormSubmitted = false;
  angForm: FormGroup;
  createForm() {
    this.angForm = this.fb.group({
      title: ['', [Validators.required]],
      text: ['', [Validators.required]],
      banner: ['',[Validators.required]],
      type: ['banner', [Validators.required]],
      link: [''],
    });
  }

  changeCategory(){
   
  }

  submitForm() {
    this.isFormSubmitted = true
    if (this.angForm.invalid) {
      return;
    }
    //const formData = this.angForm.value

    Object.keys(this.f).forEach((key) => {
      if (!(key == 'banner')) {
        this.formData.append(`${key}`, this.f[key].value)
      }
    });

    if (this.banner._id) {
      this.bannerService.update(this.banner._id, this.formData).subscribe(response => {
        this.activeModal.close('form submit');
      })
    } else {
      this.bannerService.create(this.formData).subscribe(response => {
        this.activeModal.close('form submit');
      })
    }

  }

  get f() {
    return this.angForm.controls;
  }

  get form() {
    return this.angForm.controls;
  }

  onFileSelected(event: Event, type: string) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) {
      return;
    }

    const file: File = input.files[0];
    try{
      this.formData.delete(type);
    }catch(error){

    }
    this.formData.append(`${type}`, file);
    
    //this.bannerImage = file;
  }

}
