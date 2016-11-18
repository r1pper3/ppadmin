import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

/**
 * 
 * 公共服务，与远程交互　get & post
 * @export
 * @class PagesService
 */
@Injectable()

export class PagesService {
    // serverHost
    public serviceHost = 'http://192.168.1.70:9083';

    constructor(
        private http: Http
    ) { };

    /**
     * 公共获取远程数据
     * 
     * @param {string} url
     * @returns {Object}
     * 
     * @memberOf PagesService
     */
    public getData(url: string, queryObj: Object = {}): Object {
        let fullurl = this.serviceHost + url;
        fullurl += this.tracQuery(queryObj, url);
        console.log(fullurl);
        return this.http.get(fullurl)
            .toPromise()
            .then((response) => {
                let res = response.json();
                // console.log(fullurl, res);
                if (res.State === 1) {
                    return {
                        status: 'ok',
                        data: response.json().Data
                    };
                } else {
                    console.log('err State:', res.State);
                    return {
                        status: res.State,
                        data: null
                    };
                }
            })
            .catch(this.handleError2);
    }

    /**
     * 解析Query对象，返回URL请求参数
     * 
     * @param {Object} queryObj
     * @returns {string}
     * 
     * @memberOf PagesService
     */
    private tracQuery(queryObj: Object = {}, url: string = ''): string {
        let queryStr: string = '';
        let hadQuery = url.indexOf('?') > 0 ? true : false;
        for (let key in queryObj) {
            if (queryObj[key]) {
                let data = queryObj[key];
                queryStr += ((queryStr === '' && !hadQuery) ? '?' : '&') + key + '=' + (typeof data === 'object' ? JSON.stringify(data) : data);
            }
        }
        return queryStr;
    }

    /**
     * 错误处理，返回Promise对象
     * 
     * @private
     * @param {*} error
     * @returns {Promise<any>}
     * 
     * @memberOf PagesService
     */
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    /**
     * 错误处理：　返回一个对象
     * 
     * @private
     * @param {*} error
     * @returns {Object}
     * 
     * @memberOf PagesService
     */
    private handleError2(error: any): Object {
        console.error('An error occurred', error);
        return {
            status: 'err',
            data: null
        };
    }
}
