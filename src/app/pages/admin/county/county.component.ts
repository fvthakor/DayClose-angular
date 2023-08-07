import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { County } from 'src/app/models';
import { CountyService, HelperService } from 'src/app/services';
import { AddCountyComponent } from './add-county/add-county.component';

@Component({
  selector: 'app-county',
  templateUrl: './county.component.html',
  styleUrls: ['./county.component.scss']
})
export class CountyComponent implements OnInit {
  limit = 10;
  total = 0;
  page = 1;
  cities: County[] = []
  totalPages = 0
  totalPageSize = 0
  query = ''

  constructor(
    private modalService: NgbModal,
    private countyService: CountyService,
    private changeDetectorRef: ChangeDetectorRef,
    private helperService: HelperService
  ) { }

  ngOnInit(): void {
    this.getPage(1);
  }

  open(county: County) {
    const modelRef = this.modalService.open(AddCountyComponent);
    modelRef.componentInstance.county = county;
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
    this.countyService.getAll(page, this.limit, this.query).subscribe(response => {
      this.total = response.total
      this.page = page
      this.cities = response.data
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
        this.countyService.delete(id).subscribe(response => {
          this.getPage(1);
        })
      }
    })
  }

}
