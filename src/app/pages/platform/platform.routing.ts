import { Routes, RouterModule }  from '@angular/router';

import { Platform } from './platform.component';
import { List } from './components/list';
import { Edit } from './components/edit';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Platform,
    children: [
      { path: '', component: List},
      { path: 'add', component: Edit },
      { path: 'edit/:id', component: Edit },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
