import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillComponent } from './skill.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgxPaginationModule } from 'ngx-pagination';
import { CreateSkillComponent } from './create-skill/create-skill.component';


@NgModule({
  declarations: [
    SkillComponent,
    CreateSkillComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SkillComponent,
      },
    ]),
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    NgbPaginationModule,
    NgxPaginationModule
  ]
})
export class SkillModule { }
