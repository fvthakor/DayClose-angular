import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pincode } from 'src/app/models';
import { HelperService, PincodeService } from 'src/app/services';
import { CreatePincodeComponent } from './create-pincode/create-pincode.component';

@Component({
  selector: 'app-pincode',
  templateUrl: './pincode.component.html',
  styleUrls: ['./pincode.component.scss']
})
export class PincodeComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private pincodeService: PincodeService,
    private changeDetectorRef: ChangeDetectorRef,
    private helperService: HelperService
  ) { }
  limit = 10;
  total = 0;
  page = 1;
  pincodes: Pincode[] = []
  totalPages = 0
  totalPageSize = 0
  query = ''

  ngOnInit(): void {
    this.getPage(1);
  }

  open(pincode: Pincode) {
    const modelRef = this.modalService.open(CreatePincodeComponent);
    modelRef.componentInstance.pincode = pincode;
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
    this.pincodeService.getAll(page, this.limit, this.query).subscribe(response => {
      this.total = response.total
      this.page = page
      this.pincodes = response.data
      const totalPages = Math.ceil(response.total / this.limit);
      this.totalPages = totalPages;
      this.totalPageSize = totalPages * 10;
      this.changeDetectorRef.detectChanges();
    })
  }

  getCityName(pincode: Pincode) {
    return typeof pincode.city !== 'string' ? pincode.city.name : pincode.city;
  }

  delete(id: string) {
    const alertData = {
      message: 'You won\'t be able to revert this!',
      title: 'Are you sure?',
      buttonText: 'Yes, delete it!',
    }
    this.helperService.confirmSwal(alertData).subscribe(confirm => {
      if (confirm) {
        this.pincodeService.delete(id).subscribe(response => {
          this.getPage(1);
        })
      }
    })
  }
}
