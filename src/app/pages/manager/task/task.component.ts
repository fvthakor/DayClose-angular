import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Task } from 'src/app/models';
import { HelperService, TaskService } from 'src/app/services';
import { CreateTaskComponent } from './create-task/create-task.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {


  constructor(
    private modalService: NgbModal,
    private taskService: TaskService,
    private changeDetectorRef: ChangeDetectorRef,
    private helperService: HelperService
  ) { }

  limit = 10;
  total = 0;
  page = 1;
  tasks: Task[] = []
  totalPages = 0
  totalPageSize = 0
  query = ''
  ngOnInit(): void {
    this.getPage(1);
  }

  open(task: Task) {
    const modelRef = this.modalService.open(CreateTaskComponent);
    modelRef.componentInstance.task = task;
    modelRef.result.then(
      (result) => {
        if (result === 'form submit') {
          this.getPage(1);
        }
      },
      (reason) => {
        if (reason === 'form submit') {
          this.getPage(1);
        }
      }
    );
  }

  getPage(page: any) {
    this.taskService.getAll(page, this.limit, this.query).subscribe(response => {
      console.log(response);
      this.total = response.total
      this.page = page
      this.tasks = response.data
      const totalPages = Math.ceil(response.total / this.limit);
      this.totalPages = totalPages;
      this.totalPageSize = totalPages * 10;
      this.changeDetectorRef.detectChanges();
    })
  }
  getCategoryName(task: Task) {
    return '';
    //return category.mainCategory && typeof category.mainCategory !== 'string' ? category.mainCategory.category : category.mainCategory;

  }
  delete(id: string) {
    const alertData = {
      message: 'You won\'t be able to revert this!',
      title: 'Are you sure?',
      buttonText: 'Yes, delete it!',
    }
    this.helperService.confirmSwal(alertData).subscribe(confirm => {
      if (confirm) {
        this.taskService.delete(id).subscribe(response => {
          this.getPage(1);
        })
      }
    })
  }

}
