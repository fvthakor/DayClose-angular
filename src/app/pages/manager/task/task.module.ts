import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgxPaginationModule } from 'ngx-pagination';
import { TaskProgressComponent } from './task-progress/task-progress.component';
import { CreateTaskProgressComponent } from './task-progress/create-task-progress/create-task-progress.component';

@NgModule({
  declarations: [
    TaskComponent,
    CreateTaskComponent,
    TaskProgressComponent,
    CreateTaskProgressComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TaskComponent,
      },
      {
        path: 'task-progress/:_id',
        component: TaskProgressComponent
      }
    ]),
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    NgbPaginationModule,
    NgxPaginationModule
  ]
})
export class TaskModule { }
