import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskStatusComponent } from './task-status.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgxPaginationModule } from 'ngx-pagination';
import { CreateTaskStatusComponent } from './create-task-status/create-task-status.component';



@NgModule({
  declarations: [
    TaskStatusComponent,
    CreateTaskStatusComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TaskStatusComponent,
      },
    ]),
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    NgbPaginationModule,
    NgxPaginationModule
  ]
})
export class TaskStatusModule { }
