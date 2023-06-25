import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DocumentType, Store } from 'src/app/models';
import { DocumentService, HelperService, StoreService } from 'src/app/services';
import { CreateDocumentComponent } from './create-document/create-document.component';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private documentService: DocumentService,
    private changeDetectorRef: ChangeDetectorRef,
    private helperService: HelperService
  ) { }

  limit = 10;
  total = 0;
  page = 1;
  documents: DocumentType[] = []
  totalPages = 0
  totalPageSize = 0
  query = ''
  ngOnInit(): void {
    this.getPage(1);
  }

  open(documentType: DocumentType) {
    const modelRef = this.modalService.open(CreateDocumentComponent);
    modelRef.componentInstance.document = documentType;
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
    this.documentService.getAll(page, this.limit, this.query).subscribe(response => {
      this.total = response.total
      this.page = page
      this.documents = response.data
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
        this.documentService.delete(id).subscribe(response => {
          this.getPage(1);
        })
      }
    })
  }
}
