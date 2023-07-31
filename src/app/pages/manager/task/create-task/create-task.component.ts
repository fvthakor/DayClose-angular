import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Category, Task, User } from 'src/app/models';
import { CategoryService, TaskService, UserService } from 'src/app/services';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  @Input() task: Task;
  categories: Category[] = []
  users: User[] = []
  subcategories: Category[] = []
  title = 'Create Task'
  buttonText = 'Create'

  formData = new FormData();

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private taskService: TaskService,
    private categoryService: CategoryService,
    private userService: UserService
  ) {
    this.createForm();
  }
  isFormSubmitted = false;
  ngOnInit(): void {
    console.log('task', this.task);
    this.angForm.patchValue(this.task);
    this.title = this.task._id ? 'Edit Task' : 'Create Task';
    this.buttonText = this.task._id ? 'Update' : 'Create';
    this.getParentCategory();
    this.getSubcategory();
    this.getEmployee();

  }

  angForm: FormGroup;
  createForm() {
    this.angForm = this.fb.group({
      category: ['', [Validators.required]],
      subCategory: [''],
      detail: ['', [Validators.required]],
      employee: ['', [Validators.required]],
      taskDate: ['', [Validators.required]],
      image1: [''],
      image2: [''],
      taskTime: [''],
      priority: ['', [Validators.required]],
    });
  }

  submitForm() {
    this.isFormSubmitted = true
    if (this.angForm.invalid) {
      return;
    }
    //const formData = this.angForm.value

    Object.keys(this.f).forEach((key) => {
      if (!(key == 'image1' || key == 'image2' )) {
        this.formData.append(`${key}`, this.f[key].value)
      }
    });

    if (this.task._id) {
      this.taskService.update(this.task._id, this.formData).subscribe(response => {
        this.activeModal.close('form submit');
      })
    } else {
      this.taskService.create(this.formData).subscribe(response => {
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
  getEmployee() {
    this.userService.getEmployee().subscribe(response => {
      this.users = response;
    })
  }

  onFileSelected(event: Event, type: string) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) {
      return;
    }
    const file: File = input.files[0];
    this.formData.append(`${type}`, file);
  }

  get f() {
    return this.angForm.controls;
  }

}
