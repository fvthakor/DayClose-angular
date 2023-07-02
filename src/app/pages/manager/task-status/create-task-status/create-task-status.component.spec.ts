import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTaskStatusComponent } from './create-task-status.component';

describe('CreateTaskStatusComponent', () => {
  let component: CreateTaskStatusComponent;
  let fixture: ComponentFixture<CreateTaskStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTaskStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTaskStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
