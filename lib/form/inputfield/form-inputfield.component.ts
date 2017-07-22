import {Component, Input} from '@angular/core';
import {Form} from '../form.abstract';

@Component({
  selector: 'vdab-form-inputfield',
  templateUrl: './form-inputfield.component.html'
})
export class VdabFormInputfieldComponent extends Form {

  @Input() formFieldInputType = 'text';

  constructor() {
    super();
  }
}
