import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from '../material-module/material-module.module';

import { HeaderComponent } from '../header/header.component';




@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MaterialModuleModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class ComponentsModule { }
