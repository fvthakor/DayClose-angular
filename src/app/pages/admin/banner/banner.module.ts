import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddBannerComponent } from './add-banner/add-banner.component';



@NgModule({
  declarations: [
    BannerComponent,
    AddBannerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BannerComponent,
      },
    ]),
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    NgbPaginationModule,
    NgxPaginationModule
  ]
})
export class BannerModule { }
