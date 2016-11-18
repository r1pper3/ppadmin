import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgaModule } from '../../theme/nga.module';

import { routing } from './appcontents.routing';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';
import { PagesService } from '../pages.service';
import { Appcontents } from './appcontents.component';
import { List } from './components/list/list.component';
import { ListService } from './components/list/list.service';
import { Edit } from './components/edit/edit.component';
import { EditService } from './components/edit/edit.service';

import { DictService } from '../components/dict/dict.service';
import { DictSelect } from '../components/dict/components/dictSelect.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        NgaModule,
        routing,
        DropdownModule,
        PaginationModule
    ],
    declarations: [
        Appcontents,
        List,
        Edit,
        DictSelect
    ],
    providers: [
        PagesService,
        ListService,
        EditService,
        DictService
    ]
})
export default class AppcontentsModule { }
