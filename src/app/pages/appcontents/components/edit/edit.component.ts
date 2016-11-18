import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ContentForm } from './contentForm';
import { EditService } from './edit.service';

@Component({
    moduleId: module.id,
    selector: 'edit',
    encapsulation: ViewEncapsulation.None,
    //   styles: [require('./dashboard.scss')],
    template: require('./edit.html')
})
export class Edit {
    public cForm;
    public herolist = ['aaa', 'bbb'];
    public headerTitle;

    constructor(
        private route: ActivatedRoute, private service: EditService
    ) {
        this.service.getListData()
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            console.log(id, typeof id);
            if (isNaN(id)) {
                this.headerTitle = '新建内容';
                this.cForm = new ContentForm(0);
            } else {
                this.headerTitle = '编辑内容';
            }
        });
    }

    public changeName(evn): void {
        console.log(evn);
    }
}
