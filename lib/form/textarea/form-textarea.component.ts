import {Component, Input} from '@angular/core';
import {Form} from '../form.abstract';

@Component({
  selector: 'vdab-form-textarea',
  templateUrl: './form-textarea.component.html',
  styleUrls: ['form-textarea.component.css']
})
export class VdabFormTextareaComponent extends Form {

  @Input() formFieldMaxLength = 250;

  constructor() {
    super();
  }
}
