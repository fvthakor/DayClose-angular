
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Category, Task, User, TaskProgress, TaskStatus } from 'src/app/models';
import { CategoryService, TaskService, UserService, TaskProgressService, TaskStatusService } from 'src/app/services';
@Component({
  selector: 'app-create-task-progress',
  templateUrl: './create-task-progress.component.html',
  styleUrls: ['./create-task-progress.component.scss']
})
export class CreateTaskProgressComponent implements OnInit {

  @Input() taskProgress: TaskProgress;
  categories: Category[] = []
  users: User[] = []
  subcategories: Category[] = []
  taskdata: TaskStatus[] = []

  title = ' Task Update'
  buttonText = 'Create'

  formData = new FormData();
  private routeSub: Subscription;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private taskService: TaskService,
    private categoryService: CategoryService,
    private userService: UserService,
    private taskStatusService: TaskStatusService,
    private taskProgressService: TaskProgressService,
    private route: ActivatedRoute
  ) {
    this.createForm();
  }
  isFormSubmitted = false;
  taskId:string = ''
  ngOnInit(): void {
    
    this.angForm.patchValue(this.taskProgress);
    this.title = this.taskProgress._id ? 'Edit Task' : ' Task Update';
    this.buttonText = this.taskProgress._id ? 'Update' : 'Create';

    //this.getEmployee();
    this.getTaskstatus();
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  angForm: FormGroup;
  createForm() {
    this.angForm = this.fb.group({
      taskStatus: ['', [Validators.required]],
      remark: ['', [Validators.required]],
      task: [],
      image1: [''],
      image2: ['']
    });
  }
  submitForm() {
    const taskId = this.taskId;
    this.isFormSubmitted = true
    if (this.angForm.invalid) {
      return;
    }
    //const formData = this.angForm.value

    Object.keys(this.f).forEach((key) => {
      console.log(key);
      console.log(this.f[key].value);
      if (!(key == 'image1' || key == 'image2')) {
        this.formData.append(`${key}`, this.f[key].value)

      }
    });

    if (this.taskProgress._id) {
      this.taskProgressService.update(this.taskProgress._id, this.formData).subscribe(response => {
        this.activeModal.close('form submit');
      })
    } else {
      this.taskProgressService.create(this.formData).subscribe(response => {
        this.activeModal.close('form submit');
      })
    }

  }

  get form() {
    return this.angForm.controls;
  }
  getParentCategory() {
    this.categoryService.getParentCategory().subscribe(response => {
      this.categories = response;
    })
  }

  getSubcategory() {
    //const selectedValue = event.target.value;
    this.categoryService.getSubcategory(this.angForm.value.category).subscribe(response => {
      this.subcategories = response
    })
  }
  // getEmployee() {
  //   this.userService.getEmployee().subscribe(response => {
  //     this.users = response;
  //   })
  // }
  getTaskstatus() {
    this.taskStatusService.getStatus().subscribe(response => {
      this.taskdata = response;
    })
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
  }

  get f() {
    return this.angForm.controls;
  }


}
