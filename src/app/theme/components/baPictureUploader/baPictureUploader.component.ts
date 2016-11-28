import { Component, ViewChild, Input, Output, EventEmitter, ElementRef, Renderer, Self } from '@angular/core';
// import { Ng2UploaderModule } from 'ng2-uploader';
// import {Ng2Uploader} from 'ng2-uploader/ng2-uploader';
import { Ng2Uploader } from 'ng2-uploader/src/services/ng2-uploader';

import { ControlValueAccessor, NgModel } from '@angular/forms';



@Component({
    selector: 'ba-picture-uploader[ngModel]',
    styles: [require('./baPictureUploader.scss')],
    template: require('./baPictureUploader.html'),
    providers: [Ng2Uploader]
})
export class BaPictureUploader implements ControlValueAccessor {

    @Input() defaultPicture: string = '';
    @Input() picture: string = '';

    @Input() uploaderOptions: any = {};
    @Input() canDelete: boolean = true;

    onUpload: EventEmitter<any> = new EventEmitter();
    onUploadCompleted: EventEmitter<any> = new EventEmitter();

    @ViewChild('fileUpload') protected _fileUpload: ElementRef;

    public uploadInProgress: boolean = false;
    public model: NgModel;
    public state: boolean;

    uploadFile: any;

    constructor(private renderer: Renderer, protected _uploader: Ng2Uploader, @Self() state: NgModel) {
        this.model = state;
        state.valueAccessor = this;
    }

    public onChange(value: any): void { }
    public onTouch(value: any): void { }
    public writeValue(state: any): void {
        this.state = state;
    }

    public registerOnChange(fn: any): void {
        this.onChange = function (state: boolean) {
            this.writeValue(state);
            this.model.viewToModelUpdate(state);
        }
    }
    public registerOnTouched(fn: any): void { this.onTouch = fn; }

    public ngOnInit(): void {
        if (this._canUploadOnServer()) {
            setTimeout(() => {
                this._uploader.setOptions(this.uploaderOptions);
            });

            this._uploader._emitter.subscribe((data) => {
                this._onUpload(data);
            });
        } else {
            console.warn('Please specify url parameter to be able to upload the file on the back-end');
        }
    }

    public onFiles(): void {
        let files = this._fileUpload.nativeElement.files;
        if (files.length) {
            const file = files[0];
            this._changePicture(file);
            if (this._canUploadOnServer()) {
                let filesObj = [];
                for (let f of files) {
                    filesObj.push(f);
                }
                this.uploadInProgress = true;
                this._uploader.addFilesToQueue(filesObj);
            }
        }
    }

    public bringFileSelector(): boolean {
        this.renderer.invokeElementMethod(this._fileUpload.nativeElement, 'click');
        return false;
    }

    public removePicture(): boolean {
        this.model.viewToModelUpdate({});
        this.picture = '';
        return false;
    }

    protected _changePicture(file: File): void {
        const reader = new FileReader();
        reader.addEventListener('load', (event: Event) => {
            this.picture = (<any>event.target).result;
        }, false);
        reader.readAsDataURL(file);
    }

    protected _onUpload(data): void {
        if (data['done'] || data['abort'] || data['error']) {
            this._onUploadCompleted(data);
        } else {
            this.onUpload.emit(data);
        }
    }

    protected _onUploadCompleted(data): void {
        this.uploadInProgress = false;
        this.onUploadCompleted.emit(data);
        this.model.viewToModelUpdate(data);
    }

    protected _canUploadOnServer(): boolean {
        return !!this.uploaderOptions['url'];
    }
}
