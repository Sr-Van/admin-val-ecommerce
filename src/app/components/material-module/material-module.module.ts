import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';




@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatToolbarModule,
    MatIconModule, MatButtonModule,
    MatMenuModule, MatListModule,
    MatTableModule
  ],
  exports: [
    CommonModule, MatToolbarModule,
    MatIconModule, MatButtonModule,
    MatMenuModule, MatListModule,
    MatTableModule
  ]
})
export class MaterialModuleModule { }
