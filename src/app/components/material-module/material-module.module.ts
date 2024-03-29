import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {CdkAccordionModule} from '@angular/cdk/accordion';




@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatToolbarModule,
    MatIconModule, MatButtonModule,
    MatMenuModule, MatListModule,
    MatTableModule, MatProgressSpinnerModule,
    MatSelectModule, MatInputModule,
    MatFormFieldModule, CdkAccordionModule
  ],
  exports: [
    CommonModule, MatToolbarModule,
    MatIconModule, MatButtonModule,
    MatMenuModule, MatListModule,
    MatTableModule, MatProgressSpinnerModule,
    MatSelectModule, MatInputModule,
    MatFormFieldModule, CdkAccordionModule
  ]
})
export class MaterialModuleModule { }
