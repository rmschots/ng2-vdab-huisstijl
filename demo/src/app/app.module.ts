import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { VdabHuisstijlModule } from './lib/vdab-huisstijl.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    VdabHuisstijlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
