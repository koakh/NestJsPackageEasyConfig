"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var EasyconfigModule_1;
const common_1 = require("@nestjs/common");
const easyconfig_service_1 = require("./easyconfig.service");
const json_web_token_module_1 = require("./json-web-token/json-web-token.module");
let EasyconfigModule = EasyconfigModule_1 = class EasyconfigModule {
    static register(options) {
        return {
            module: EasyconfigModule_1,
            providers: [
                {
                    provide: easyconfig_service_1.EasyconfigService,
                    useValue: new easyconfig_service_1.EasyconfigService(options),
                },
            ],
            exports: [easyconfig_service_1.EasyconfigService],
        };
    }
};
EasyconfigModule = EasyconfigModule_1 = __decorate([
    common_1.Module({
        imports: [json_web_token_module_1.JsonWebTokenModule],
    })
], EasyconfigModule);
exports.EasyconfigModule = EasyconfigModule;
