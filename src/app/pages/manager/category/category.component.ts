import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from 'src/app/models';
import { CategoryService, HelperService } from 'src/app/services';
import { CreateCategoryComponent } from './create-category/create-category.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private categoryService: CategoryService,
    private changeDetectorRef: ChangeDetectorRef,
    private helperService: HelperService
  ) { }

  limit = 10;
  total = 0;
  page = 1;
  categories: Category[] = []
  totalPages = 0
  totalPageSize = 0
  query = ''
  ngOnInit(): void {
    this.getPage(1);
  }

  open(category: Category) {
    category = typeof category.mainCategory == 'string' ? category : { ...category, mainCategory: category.mainCategory?._id }
    const modelRef = this.modalService.open(CreateCategoryComponent);
    modelRef.componentInstance.category = category;
    console.log('mahesh');
    console.log(category);
    modelRef.result.then(
      (result) => {
        if (result === 'form submit') {
          this.getPage(1);
        }
      },
      (reason) => {
        if (reason === 'form submit') {
          console.log('mamata');
          this.getPage(1);
        }
      }
    );
  }

  getPage(page: any) {
    this.categoryService.getAll(page, this.limit, this.query).subscribe(response => {
      this.total = response.total
      this.page = page
      this.categories = response.data
      const totalPages = Math.ceil(response.total / this.limit);
      this.totalPages = totalPages;
      this.totalPageSize = totalPages * 10;
      this.changeDetectorRef.detectChanges();
    })
  }
  getCategoryName(category: Category) {
    return category.mainCategory && typeof category.mainCategory !== 'string' ? category.mainCategory.category : category.mainCategory;

  }
  delete(id: string) {
    const alertData = {
      message: 'You won\'t be able to revert this!',
      title: 'Are you sure?',
      buttonText: 'Yes, delete it!',
    }
    this.helperService.confirmSwal(alertData).subscribe(confirm => {
      if (confirm) {
        this.categoryService.delete(id).subscribe(response => {
          this.getPage(1);
        })
      }
    })
  }


}
