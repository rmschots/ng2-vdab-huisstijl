import {Component, Input} from '@angular/core';
import {Form} from '../form.abstract';

@Component({
  selector: 'vdab-form-dropdown',
  templateUrl: './form-dropdown.component.html',
})
export class VdabFormDropdownComponent extends Form {

  @Input() dropdownOptions: string[];

  constructor() {
    super();
  }
}
