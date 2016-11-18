import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgaModule } from '../../theme/nga.module';


import { Dashboard } from './dashboard.component';
import { routing } from './dashboard.routing';



@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    routing
  ],
  declarations: [
    Dashboard
  ],
  providers: [

  ]
})
export default class DashboardModule { }
