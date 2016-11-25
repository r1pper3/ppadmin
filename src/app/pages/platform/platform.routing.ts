import { Routes, RouterModule }  from '@angular/router';

import { Platform } from './platform.component';


// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Platform,
    children: []
  }
];

export const routing = RouterModule.forChild(routes);
