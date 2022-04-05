"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blob = void 0;
const RequestClient_1 = require("../base/RequestClient");
const model_1 = require("../model");
class Blob extends RequestClient_1.RequestClient {
    constructor(seniorApi) {
        super(seniorApi, 'platform', 'blob_service');
    }
    uploadFile(blobRequest) {
        const clientOptions = {
            url: this.getUrlPath('actions/uploadFile'),
            method: model_1.HttpMethod.POST,
            data: blobRequest,
            headers: {
                authorization: this.seniorApi.accessToken,
            },
        };
        return this.request(clientOptions);
    }
    commitFile(commitFileInput) {
        const clientOptions = {
            url: this.getUrlPath('actions/commitFile'),
            method: model_1.HttpMethod.POST,
            data: commitFileInput,
            headers: {
                authorization: this.seniorApi.accessToken,
            },
        };
        return this.request(clientOptions);
    }
    uploadAndCommitFile(blobRequest, file) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data: blobDetails } = yield this.uploadFile(blobRequest);
            blobDetails.areaSecret = blobRequest.areaSecret;
            const clientOptions = {
                url: blobDetails.location.uri,
                method: model_1.HttpMethod.PUT,
                data: file,
            };
            yield this.request(clientOptions);
            const commitFileInput = {
                areaSecret: blobDetails.areaSecret,
                domainName: blobDetails.domainName,
                serviceName: blobDetails.serviceName,
                targetObject: blobDetails.targetObjectId,
                fileName: blobDetails.fileName,
                version: blobDetails.version,
                release: true,
            };
            const { data: commitFileOutput } = yield this.commitFile(commitFileInput);
            return {
                blobDetails,
                commitFileOutput,
            };
        });
    }
}
exports.Blob = Blob;
//# sourceMappingURL=Blob.js.map