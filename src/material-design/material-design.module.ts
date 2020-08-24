import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {CdkTableModule} from '@angular/cdk/table';
import {MatCheckboxModule} from '@angular/material/checkbox';

const modules: any[] = [
  MatButtonModule,
  MatCheckboxModule,
  CdkTableModule,
];

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class MaterialDesignModule { }
