import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PincodeComponent } from './pincode.component';
import { CreatePincodeComponent } from './create-pincode/create-pincode.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    PincodeComponent,
    CreatePincodeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PincodeComponent,
      },
    ]),
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    NgbPaginationModule,
    NgxPaginationModule
  ]
})
export class PincodeModule { }
