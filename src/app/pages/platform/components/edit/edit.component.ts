import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PlatformForm } from './platformForm';
import { EditService } from './edit.service';

@Component({
    // moduleId: module.id,
    selector: 'edit',
    encapsulation: ViewEncapsulation.None,
    //   styles: [require('./dashboard.scss')],
    template: require('./edit.html')
})
export class Edit {
    public cForm: any;
    public headerTitle: string;
    public submitted: boolean = false;

    public myOptions: Array<any>;
    public mySelectValue: Array<string>; // Array of strings for multi select, string for single select.

    constructor(
        private route: ActivatedRoute, private service: EditService
    ) {
        // this.service.getListData()
        //     .then((data) => {
        //         console.log(data);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
    }

    ngOnInit(): void {
        this.myOptions = [
            {value: 'a', label: 'Alpha'},
            {value: 'b', label: 'Beta'},
            {value: 'c', label: 'Gamma'},
            {value: 'd', label: 'Alphaasdf'},
            {value: 'e', label: 'Betaet'},
            {value: 'f', label: 'Gammaeryt'},
            {value: 'g', label: 'Alphagh'},
            {value: 'h', label: 'Betasfe'},
            {value: 'i', label: 'Gammae'},
            {value: 'j', label: 'Alphaereerwew'},
            {value: 'ba', label: 'Betafdgdsgf'},
            {value: 'cd', label: 'Gammadgf'},
            {value: 'ad', label: 'Alphadfg'},
            {value: 'bsf', label: 'Betaqweq'},
            {value: 'csf', label: 'Gammasdasertq'},
            {value: 'asf', label: 'Alphasdfgb'},
            {value: 'bsdq2', label: 'Betasdfwe'},
            {value: 'c232', label: 'Gamma1211'}
        ];
        this.mySelectValue = ['b', 'c'];
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            console.log(params);
            if (isNaN(id)) {
                this.headerTitle = '新建内容';
                this.cForm = new PlatformForm(10, true, '', true);
                console.log(this.cForm);
            } else {
                this.headerTitle = '编辑内容';
                // 获取内容详细
                // this.service.getItemData(id)
                //     .then((data) => {
                //         console.log(data);
                //     })
            }
        });
    }

    ngSubmit(): void {
        this.submitted = true;
        console.log("submit");
    }

    public changeName(evn): void {
        console.log(evn);
    }
}
