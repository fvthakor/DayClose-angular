import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Category, TaskStatus } from 'src/app/models';
import { HelperService, TaskStatusService } from 'src/app/services';
import { CreateTaskStatusComponent } from './create-task-status/create-task-status.component';

@Component({
  selector: 'app-task-status',
  templateUrl: './task-status.component.html',
  styleUrls: ['./task-status.component.scss']
})
export class TaskStatusComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private taskStatusService: TaskStatusService,
    private changeDetectorRef: ChangeDetectorRef,
    private helperService: HelperService
  ) { }

  limit = 10;
  total = 0;
  page = 1;
  categories: TaskStatus[] = []
  totalPages = 0
  totalPageSize = 0
  query = ''
  ngOnInit(): void {
    this.getPage(1);
  }

  open(taskstatus: TaskStatus) {
    //category = typeof category.mainCategory == 'string' ? category : { ...category, mainCategory: category.mainCategory?._id }
    const modelRef = this.modalService.open(CreateTaskStatusComponent);
    modelRef.componentInstance.taskstatus = taskstatus;
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
    this.taskStatusService.getAll(page, this.limit, this.query).subscribe(response => {
      this.total = response.total
      this.page = page
      this.categories = response.data
      const totalPages = Math.ceil(response.total / this.limit);
      this.totalPages = totalPages;
      this.totalPageSize = totalPages * 10;
      this.changeDetectorRef.detectChanges();
    })
  }

  delete(id: string) {
    const alertData = {
      message: 'You won\'t be able to revert this!',
      title: 'Are you sure?',
      buttonText: 'Yes, delete it!',
    }
    this.helperService.confirmSwal(alertData).subscribe(confirm => {
      if (confirm) {
        this.taskStatusService.delete(id).subscribe(response => {
          this.getPage(1);
        })
      }
    })
  }
}
