import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Category, Task } from 'src/app/models';
import { HelperService, TaskService } from 'src/app/services';
import { CreateTaskComponent } from './create-task/create-task.component';
import * as moment from 'moment';
import { AuthService, UserType } from 'src/app/modules/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {


  constructor(
    private auth: AuthService,
    private modalService: NgbModal,
    private taskService: TaskService,
    private changeDetectorRef: ChangeDetectorRef,
    private helperService: HelperService
  ) { }
  user$: Observable<UserType>;
  limit = 10;
  total = 0;
  page = 1;
  tasks: Task[] = []
  totalPages = 0
  totalPageSize = 0
  query = ''
  taskDate= '';
  ngOnInit(): void {
    this.getPage(1);
    this.user$ = this.auth.currentUserSubject.asObservable();
  }

  getCategoryName1(category: Category) {
    return '';
  }

  open(task: Task) {
    const modelRef = this.modalService.open(CreateTaskComponent);
    modelRef.componentInstance.task = {
      ...task,
      category: typeof task.category === 'string' ? task.category : task.category?._id,
      subCategory: typeof task.subCategory === 'string' ? task.subCategory : task.subCategory?._id,
      employee: typeof task.employee === 'string' ? task.employee : task.employee._id,
      taskDate: moment(task.taskDate).format('DD-MM-YYYY')
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
    this.taskService.getAll(page, this.limit, this.query, this.taskDate).subscribe(response => {
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
    //return '';
    return task.category && typeof task.category !== 'string' ? task.category.category : task.category;

  }

  getsubCategoryName(task: Task) {
    return task.subCategory && typeof task.subCategory !== 'string' ? task.subCategory.category : task.subCategory;
  }

  getEmployeeName(task: Task) {
    return task.employee && typeof task.employee !== 'string' ? `${task.employee.firstName} ${task.employee.lastName}` : task.employee;
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

  getDate(date:string){
    return moment(date).format('DD-MM-YYYY')
  }
  getTime(time:string){
    return time ? time : '00:00'
  }

}
