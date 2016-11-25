import { Injectable } from '@angular/core';
import { PagesService } from '../../../pages.service';

@Injectable()
export class ListService {
    constructor(
        private service: PagesService
    ) {};

    // 获取内容列表
    getDictData(): any {
        let url = '/appdata/List?page=1&count=10&json={}';
        return this.service.getData(url);
    }

    getListDatas(queryObj: Object = {}): any {
        let url = '/appdata/List';
        return this.service.getData(url, queryObj);
    }
}
