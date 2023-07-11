import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTaskProgressComponent } from './create-task-progress.component';

describe('CreateTaskProgressComponent', () => {
  let component: CreateTaskProgressComponent;
  let fixture: ComponentFixture<CreateTaskProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTaskProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTaskProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
