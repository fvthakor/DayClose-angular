import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { StoreComponent } from '../store/store.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgxPaginationModule } from 'ngx-pagination';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  declarations: [
    UserComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserComponent,
      },
    ]),
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    NgbPaginationModule,
    NgxPaginationModule
  ]
})
export class UserModule { }
