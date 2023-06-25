import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Skill } from 'src/app/models';
import { SkillService } from 'src/app/services';

@Component({
  selector: 'app-create-skill',
  templateUrl: './create-skill.component.html',
  styleUrls: ['./create-skill.component.scss']
})
export class CreateSkillComponent implements OnInit {
  @Input() skill: Skill;
  title = 'Create Skill'
  buttonText = 'Create'
  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private skillService: SkillService
  ) {
    this.createForm();
  }
  isFormSubmitted = false;
  ngOnInit(): void {
    this.angForm.patchValue(this.skill);
    this.title = this.skill._id ? 'Edit Skill' : 'Create Skill';
    this.buttonText = this.skill._id ? 'Update' : 'Create';
  }

  angForm: FormGroup;
  createForm() {
    this.angForm = this.fb.group({
      name: ['', [Validators.required]],
    });
  }

  submitForm() {
    this.isFormSubmitted = true
    if (this.angForm.invalid) {
      return;
    }
    const formData = this.angForm.value
    if (this.skill._id) {
      this.skillService.update(this.skill._id, formData).subscribe(response => {
        this.activeModal.close('form submit');
      })
    } else {
      this.skillService.create(formData).subscribe(response => {
        this.activeModal.close('form submit');
      })
    }

  }

  get form() {
    return this.angForm.controls;
  }

}
