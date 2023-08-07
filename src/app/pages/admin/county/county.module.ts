import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountyComponent } from './county.component';
import { AddCountyComponent } from './add-county/add-county.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    CountyComponent,
    AddCountyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CountyComponent,
      },
    ]),
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    NgbPaginationModule,
    NgxPaginationModule
  ]
})
export class CountyModule { }
