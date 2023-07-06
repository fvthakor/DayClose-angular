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

    this.angForm.patchValue(this.task);
    this.title = this.task._id ? 'Edit Task' : 'Create Task';
    this.buttonText = this.task._id ? 'Update' : 'Create';
    this.getParentCategory();
    this.getEmployee();

  }

  angForm: FormGroup;
  createForm() {
    this.angForm = this.fb.group({
      category: ['', [Validators.required]],
      mainCategory: ['', [Validators.required]],
      subCategory: [''],
      detail: ['', [Validators.required]],
      employee: ['', [Validators.required]],
      taskDate: ['', [Validators.required]],
      image1: [''],
      image2: ['']
    });
  }

  submitForm() {
    this.isFormSubmitted = true
    // if (this.angForm.invalid) {
    //   
    //   return;
    // }
    const formData = this.angForm.value
    if (this.task._id) {
      this.taskService.update(this.task._id, formData).subscribe(response => {
        this.activeModal.close('form submit');
      })
    } else {
      this.taskService.create(formData).subscribe(response => {
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

  getSubcategory(event: any) {
    const selectedValue = event.target.value;
    this.categoryService.getSubcategory(selectedValue).subscribe(response => {
      this.subcategories = response
    })
  }
  getEmployee() {
    this.userService.getEmployee().subscribe(response => {
      this.users = response;
    })
  }

}
