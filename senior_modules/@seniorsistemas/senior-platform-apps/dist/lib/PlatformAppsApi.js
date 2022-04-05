"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _workflow, _cms;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformAppsApi = void 0;
const senior_core_1 = require("@seniorsistemas/senior-core");
const cms_1 = __importDefault(require("./resources/cms"));
const workflow_1 = __importDefault(require("./resources/workflow"));
/**
 * Responsável por fornecer acesso a todas as APIs de aplicativos disponibilizadas.
 */
class PlatformAppsApi extends senior_core_1.SeniorApi {
    constructor() {
        super(...arguments);
        _workflow.set(this, void 0);
        _cms.set(this, void 0);
    }
    /**
     * Retorna o service responsável pela comunicação com o serviço de Workflow
     */
    get workflow() {
        __classPrivateFieldSet(this, _workflow, __classPrivateFieldGet(this, _workflow) || new workflow_1.default(this));
        return __classPrivateFieldGet(this, _workflow);
    }
    /**
     * Retorna o service responsável pela comunicação com o serviço do CMS
     */
    get cms() {
        __classPrivateFieldSet(this, _cms, __classPrivateFieldGet(this, _cms) || new cms_1.default(this));
        return __classPrivateFieldGet(this, _cms);
    }
}
exports.PlatformAppsApi = PlatformAppsApi;
_workflow = new WeakMap(), _cms = new WeakMap();
//# sourceMappingURL=PlatformAppsApi.js.map