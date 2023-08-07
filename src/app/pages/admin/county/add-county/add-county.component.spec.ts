import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCountyComponent } from './add-county.component';

describe('AddCountyComponent', () => {
  let component: AddCountyComponent;
  let fixture: ComponentFixture<AddCountyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCountyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCountyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
