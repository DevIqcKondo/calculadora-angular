import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components';
import { CalculadoraService } from './services';



@NgModule({
  declarations: [
    ComponentsComponent
  ],
  exports: [
    ComponentsComponent

  ],
  imports: [
    CommonModule
  ],
  providers: [
    CalculadoraService
  ]
})
export class CalculadoraModule { }
