import { Component, ViewEncapsulation, HostListener } from '@angular/core';

import { ListService } from './list.service';
import { Config } from '../../../config';

@Component({
    selector: 'platform-list',
    encapsulation: ViewEncapsulation.None,
    //   styles: [require('./dashboard.scss')],
    template: require('./list.html')
})
export class List {

    constructor(
        private service: ListService
    ) { }

    ngOnInit(): void {
        // this.getList();
        // console.log(this.conf);
    }
}
