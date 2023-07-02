import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskStatus } from 'src/app/models';
import { CategoryService } from 'src/app/services';
import { TaskStatusService } from 'src/app/services';

@Component({
  selector: 'app-create-task-status',
  templateUrl: './create-task-status.component.html',
  styleUrls: ['./create-task-status.component.scss']
})
export class CreateTaskStatusComponent implements OnInit {

  @Input() taskstatus: TaskStatus;
  categories: TaskStatus[] = []

  title = 'Create Taskstatus'
  buttonText = 'Create'
  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private taskstatusService: TaskStatusService
  ) {
    this.createForm();
  }
  isFormSubmitted = false;
  ngOnInit(): void {
    this.angForm.patchValue(this.taskstatus);
    this.title = this.taskstatus._id ? 'Edit Taskstatus' : 'Create Taskstatus';
    this.buttonText = this.taskstatus._id ? 'Update' : 'Create';

  }

  angForm: FormGroup;
  createForm() {
    this.angForm = this.fb.group({
      status: ['', [Validators.required]]
    });
  }

  submitForm() {
    this.isFormSubmitted = true
    if (this.angForm.invalid) {
      return;
    }
    const formData = this.angForm.value
    if (this.taskstatus._id) {
      this.taskstatusService.update(this.taskstatus._id, formData).subscribe(response => {
        this.activeModal.close('form submit');
      })
    } else {
      this.taskstatusService.create(formData).subscribe(response => {
        this.activeModal.close('form submit');
      })
    }

  }

  get form() {
    return this.angForm.controls;
  }


}
