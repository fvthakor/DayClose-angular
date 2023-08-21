import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { City } from 'src/app/models';
import { CityService, HelperService } from 'src/app/services';
import { AddCityComponent } from './add-city/add-city.component';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private cityService: CityService,
    private changeDetectorRef: ChangeDetectorRef,
    private helperService: HelperService
  ) { }

  limit = 10;
  total = 0;
  page = 1;
  cities: City[] = []
  totalPages = 0
  totalPageSize = 0
  query = ''

  ngOnInit(): void {
    this.getPage(1);
  }

  open(city: City) {
    const modelRef = this.modalService.open(AddCityComponent);
    modelRef.componentInstance.city = {
      ...city,
      county: typeof city.county === 'string' ? city.county : city.county._id
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
    this.cityService.getAll(page, this.limit, this.query).subscribe(response => {
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
        this.cityService.delete(id).subscribe(response => {
          this.getPage(1);
        })
      }
    })
  }

  getCountyName(city: City) {
    return typeof city.county !== 'string' ? city.county?.name : city.county;
  }

}
