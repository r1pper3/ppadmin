import { Routes, RouterModule }  from '@angular/router';

import { Appcontents } from './appcontents.component';

import { List } from './components/list';
import { Edit } from './components/edit';


// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Appcontents,
    children: [
      { path: '', component: List},
      { path: 'add', component: Edit },
      { path: 'edit/:id', component: Edit },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
