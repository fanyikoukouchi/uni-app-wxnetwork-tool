class Request {
    constructor(options = {}) {
        this.baseUrl = options.baseUrl || '';
        this.defaultHeader = options.header || {};
        this.beforeRequest = options.beforeRequest || null;
        this.afterRequest = options.afterRequest || null;
    }

    get(url, data = {}, header = {}) {
        return this._request('GET', url, data, header);
    }

    post(url, data = {}, header = {}) {
        return this._request('POST', url, data, header);
    }

    put(url, data = {}, header = {}) {
        return this._request('PUT', url, data, header);
    }

    delete(url, data = {}, header = {}) {
        return this._request('DELETE', url, data, header);
    }

    _request(method, url, data, header) {
        const requestUrl = this.baseUrl + url;
        const requestHeader = { ...this.defaultHeader, ...header };

        this.beforeRequest && typeof this.beforeRequest === 'function' && this.beforeRequest({ method, url: requestUrl, data, header: requestHeader });

        return new Promise((resolve, reject) => {
            let weixin = wx;
            if (typeof uni !== 'undefined') {
                weixin = uni;
            }

            weixin.request({
                url: requestUrl,
                method: method,
                data: data,
                header: requestHeader,
                success: (res) => {
                    if (res.statusCode === 200) {
                        resolve(res.data);
                    } else {
                        reject({ message: `HTTP error ${res.statusCode}`, ...res });
                    }
                },
                fail: (err) => {
                    reject({ message: 'Network request failed', ...err });
                },
                complete: (res) => {
                    this.afterRequest && typeof this.afterRequest === 'function' && this.afterRequest(res);
                }
            });
        });
    }
}

export default Request;
