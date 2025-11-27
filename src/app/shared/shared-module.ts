import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArRealityComponent } from './components/arReality/ar-reality.component';

const components = [ArRealityComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
