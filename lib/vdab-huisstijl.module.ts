import { NgModule } from '@angular/core';
import { VdabFormDropdownComponent } from './form/dropdown/form-dropdown.component';
import { VdabFormInputfieldComponent } from './form/inputfield/form-inputfield.component';
import { VdabFormTextareaComponent } from './form/textarea/form-textarea.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [VdabFormDropdownComponent, VdabFormInputfieldComponent, VdabFormTextareaComponent],
  exports: [VdabFormDropdownComponent, VdabFormInputfieldComponent, VdabFormTextareaComponent],
  providers: [],
})
export class VdabHuisstijlModule {
}
