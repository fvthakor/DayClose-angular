import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from 'src/app/models';
import { CategoryService } from 'src/app/services';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {
  @Input() category: Category;
  categories: Category[] = []

  title = 'Create Category'
  buttonText = 'Create'
  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private categoryService: CategoryService
  ) {
    this.createForm();
  }
  isFormSubmitted = false;
  ngOnInit(): void {

    this.angForm.patchValue(this.category);
    this.title = this.category._id ? 'Edit Category' : 'Create Category';
    this.buttonText = this.category._id ? 'Update' : 'Create';
    this.getParentCategory();
  }

  angForm: FormGroup;
  createForm() {
    this.angForm = this.fb.group({
      category: ['', [Validators.required]],
      mainCategory: ['']
    });
  }

  submitForm() {
    this.isFormSubmitted = true
    if (this.angForm.invalid) {
      return;
    }
    const formData = this.angForm.value
    if (this.category._id) {
      this.categoryService.update(this.category._id, formData).subscribe(response => {
        this.activeModal.close('form submit');
      })
    } else {
      this.categoryService.create(formData).subscribe(response => {
        this.activeModal.close('form submit');
      })
    }

  }

  get form() {
    return this.angForm.controls;
  }
  getParentCategory() {
    this.categoryService.getParentCategory().subscribe(response => {
      this.categories = response;
    })
  }

}
