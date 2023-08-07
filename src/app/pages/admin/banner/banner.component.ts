import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Banner } from 'src/app/models';
import { AuthService, UserType } from 'src/app/modules/auth';
import { BannerService, HelperService } from 'src/app/services';
import { AddBannerComponent } from './add-banner/add-banner.component';
import * as moment from 'moment';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private modalService: NgbModal,
    private bannerService: BannerService,
    private changeDetectorRef: ChangeDetectorRef,
    private helperService: HelperService
  ) { }

  user$: Observable<UserType>;
  limit = 10;
  total = 0;
  page = 1;
  banners: Banner[] = []
  totalPages = 0
  totalPageSize = 0
  query = ''
  
  ngOnInit(): void {
    this.getPage(1);
    this.user$ = this.auth.currentUserSubject.asObservable();
  }

  open(banner: Banner) {
    const modelRef = this.modalService.open(AddBannerComponent);
    modelRef.componentInstance.banner = banner;
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
    this.bannerService.getAll(page, this.limit, this.query).subscribe(response => {
      console.log(response);
      this.total = response.total
      this.page = page
      this.banners = response.data
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
        this.bannerService.delete(id).subscribe(response => {
          this.getPage(1);
        })
      }
    })
  }

}
