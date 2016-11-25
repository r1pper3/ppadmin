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
    public conf = new Config();
    public totalPages: number = 0;
    public pagination: any = this.conf.pagination;
    public pageConf: any = this.conf.pageConf;
    public contentList: Array<any> = [];
    public isLoading: boolean = true;

    constructor(
        private service: ListService
    ) { }

    ngOnInit(): void {
        this.getList();
        // console.log(this.conf);
    }

    public pageChanged(event: any): void {
        this.pagination.page = event.page;
        this.pageConf.currentPage = event.page;
        this.getList();
    }

    // 获取列表数据
    private getList(): void {
        // console.log(this.conf.pagination);
        this.service.getListDatas(this.pagination)
            .then((res) => {
                this.isLoading = false;
                if (res.status === 'ok') {
                    let data = res.data.List;
                    console.log(data);
                    this.totalPages = data.TotalPages;
                    this.pageConf.totalItems = data.TotalCount;
                    this.contentList = res.data.List.Items;
                }
            });
    }

}
