"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestOptions = void 0;
class RequestOptions {
    constructor(timeout = 30000, url = null, method = null, headers = null, data = null, params = null) {
        this.timeout = timeout;
        this.url = url;
        this.method = method;
        this.headers = headers;
        this.data = data;
        this.params = params;
    }
    toOptions() {
        return Object.assign(Object.assign({}, this), { headers: Object.assign({}, this.headers) }); //clone
    }
}
exports.RequestOptions = RequestOptions;
//# sourceMappingURL=RequestOptions.js.map