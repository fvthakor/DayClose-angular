import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateStoreComponent } from './create-store/create-store.component';
import { HelperService, StoreService } from 'src/app/services';
import { Store } from 'src/app/models';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private storeService: StoreService,
    private changeDetectorRef: ChangeDetectorRef,
    private helperService: HelperService
  ) { }

  limit = 10;
  total = 0;
  page = 1;
  stores: Store[] = []
  totalPages = 0
  totalPageSize = 0
  query = ''
  ngOnInit(): void {
    this.getPage(1);
  }

  open(store: Store) {
    const modelRef = this.modalService.open(CreateStoreComponent, { size: 'xl' });
    modelRef.componentInstance.store = store;
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
    this.storeService.getAll(page, this.limit, this.query).subscribe(response => {
      this.total = response.total
      this.page = page
      this.stores = response.data
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
        this.storeService.delete(id).subscribe(response => {
          this.getPage(1);
        })
      }
    })
  }
}
