import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DictService } from '../dict.service';

@Component({
    selector: 'dict-select',
    styles: [],
    template: require('./dictSelect.html')
})
export class DictSelect {
    // @Input() public type: string;

    constructor(private service: DictService) {
        this.service.getDictData()
            .then((res) => {
                console.log(res);
            });
    }
}
