import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export const MAXLENGTH = 10;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dummyForm: FormGroup;
  dummyOptions: string[];

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  bewaar() {
    if (this.dummyForm.valid) {
      console.log('form submitted: ' + this.dummyForm.value);
    }
  }

  annuleer() {
    console.log('geannuleerd');
  }

  public get maxLength() {
    return MAXLENGTH;
  }

  private buildForm() {
    this.dummyOptions = ['Man', 'Vrouw', 'Alien'];
    this.dummyForm = this.formBuilder.group({
      field1: ['', []],
      field2: ['', [Validators.required, Validators.minLength(3)]],
      field3: ['', [Validators.required]],
      field4: ['', [Validators.required, Validators.maxLength(this.maxLength)]]
    });
  }
}
