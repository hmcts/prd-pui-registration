import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html'
})

export class FromBuilderComponent implements OnInit {

  constructor() {}

  @Input() formDraft: FormGroup;
  @Input() pageItems: any;
  @Input() useValidation = true;

  @Output() submitPage = new EventEmitter<FormGroup>();

  ngOnInit(): void {
  }

  onFormSubmit() {
    const { value } = this.formDraft;
    this.submitPage.emit({ ...value });
  }
}
