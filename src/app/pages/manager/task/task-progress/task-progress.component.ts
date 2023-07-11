import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskProgress } from 'src/app/models';
import { CreateTaskProgressComponent } from './create-task-progress/create-task-progress.component';
import { TaskProgressService, HelperService } from 'src/app/services';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-task-progress',
  templateUrl: './task-progress.component.html',
  styleUrls: ['./task-progress.component.scss']
})
export class TaskProgressComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private helperService: HelperService,
    private taskProgressService: TaskProgressService,
    private changeDetectorRef: ChangeDetectorRef,

  ) { }
  limit = 10;
  total = 0;
  page = 1;
  tasks: TaskProgress[] = []
  totalPages = 0
  totalPageSize = 0
  query = ''
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    this.getPage(1,);
  }
  open(taskProgress: TaskProgress) {
    const modelRef = this.modalService.open(CreateTaskProgressComponent);
    modelRef.componentInstance.taskProgress = {
      ...taskProgress,

    };
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
    var id = this.route.snapshot.paramMap.get('_id');
    console.log(id);
    this.taskProgressService.getTaskStatusAll(page, this.limit, this.query, id).subscribe(response => {
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
  getTaskStatusName(task: TaskProgress) {
    return task.taskStatus && typeof task.taskStatus !== 'string' ? task.taskStatus.status : task.taskStatus;
  }
  delete(id: string) {
    const alertData = {
      message: 'You won\'t be able to revert this!',
      title: 'Are you sure?',
      buttonText: 'Yes, delete it!',
    }
    this.helperService.confirmSwal(alertData).subscribe(confirm => {
      if (confirm) {
        this.taskProgressService.delete(id).subscribe(response => {
          this.getPage(1);
        })
      }
    })
  }
}

