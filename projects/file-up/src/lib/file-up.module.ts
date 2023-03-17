import { NgModule } from '@angular/core';
import { FileUpComponent } from './file-up.component';
import { FormsModule } from '@angular/forms';
import { LoadTableComponent } from './load-table/load-table.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    FileUpComponent,
    LoadTableComponent,
    FilterPipe
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule
  ],
  exports: [
    FileUpComponent
  ]
})
export class FileUpModule { }
