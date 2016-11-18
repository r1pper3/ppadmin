import { Injectable } from '@angular/core';
import { PagesService } from '../../pages.service';

@Injectable()

export class DictService {
    constructor(
        private service: PagesService
    ) { };

    // 获取字典列表
    getDictData(queryObj: Object = {}): any {
        let url = '/Dict/GetAllDcit';
        return this.service.getData(url, queryObj);
    }

    // 根据类型获取字典
    getDictByType(_type: string = ''): any {
        if (_type === '') {
            return {
                data: null,
                status: 'err: 字典 type 不能为空'
            };
        } else {
            let url = '/Dict/GetDcit';
            return this.service.getData(url, { type: _type });
        }
    }
}
