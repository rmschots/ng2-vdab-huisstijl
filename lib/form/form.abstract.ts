import {Input, OnInit} from '@angular/core';
import 'rxjs/add/operator/takeUntil';
import { Unsubscribable } from '../abstract/unsubscribable';
import { FormGroup } from '@angular/forms';

export abstract class Form extends Unsubscribable implements OnInit {

  formError: string | null;

  @Input() formGroup: FormGroup;
  @Input() formFieldLabel: string;
  @Input() formFieldReference: string;
  @Input() formValidation: any;
  @Input() formFieldPlaceholder: string;
  @Input() formFieldOptional: boolean;

  constructor() {
    super();
  }

  ngOnInit() {
    this.formGroup.valueChanges
      .takeUntil(this.ngUnsubscribe$)
      .subscribe(() => this.onFormValueChanged());
  }

  onFormValueChanged(): void {
    if (!this.formGroup) {
      return;
    }
    const control = this.formGroup.get(this.formFieldReference);
    if (control && control.dirty && !control.valid) {
      for (const key of Object.keys(control.errors)) {
        this.formError = this.formValidation[key] + '';
      }
    } else {
      this.formError = null;
    }
  }

}
