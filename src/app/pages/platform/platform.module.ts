import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgaModule } from '../../theme/nga.module';

import { routing } from './platform.routing';
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';

import { PagesService } from '../pages.service';
import { Platform } from './platform.component';
import { List } from './components/list';
import { ListService } from './components/list/list.service';
import { Edit } from './components/edit';
import { EditService } from './components/edit/edit.service';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        routing,
        PaginationModule
    ],
    declarations: [
        Platform,
        List,
        Edit
    ],
    providers: [
        PagesService,
        ListService,
        EditService
    ]
})
export default class PlatformsModule { } 
