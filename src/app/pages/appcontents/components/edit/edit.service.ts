import { Injectable } from '@angular/core';
import { PagesService } from '../../../pages.service';

@Injectable()
export class EditService {
    constructor(
        private service: PagesService
    ) { };

    // 获取内容列表
    getListData(): any {
        let url = '/appdata/List?callback=JSON_CALLBACK&page=1&count=10&json={}';
        return this.service.getData(url);
    }
}
