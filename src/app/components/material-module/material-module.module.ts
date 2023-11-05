import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';




@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatToolbarModule,
    MatIconModule, MatButtonModule,
    MatMenuModule
  ],
  exports: [
    CommonModule, MatToolbarModule,
    MatIconModule, MatButtonModule,
    MatMenuModule
  ]
})
export class MaterialModuleModule { }
