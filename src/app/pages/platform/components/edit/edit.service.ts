import { Injectable } from '@angular/core';
import { PagesService } from '../../../pages.service';

@Injectable()
export class EditService {
    constructor(
        private service: PagesService
    ) { };

    getDictData(_id): any {
        this.service.getData('/', { id: _id });
    }
}
