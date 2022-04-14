"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logMethod(params) {
    return function (target, methodName, desc) {
        // console.log(params);
        // console.log(target);
        // console.log(methodName);
        // console.log(desc);
        let oMethod = desc.value;
        desc.value = function (...args) {
            let sum = 0;
            for (let i = 0; i < args.length; i++) {
                sum += args[i];
            }
            console.log(sum);
            oMethod.apply(this, args);
        };
    };
}
let HttpClient = /** @class */ (() => {
    class HttpClient {
        constructor() {
            this.apiUrl = 'www.chinavanes.com';
        }
        getData() {
            console.log(this.apiUrl);
        }
    }
    __decorate([
        logMethod('http://www.chinavanes.com')
    ], HttpClient.prototype, "getData", null);
    return HttpClient;
})();
var http = new HttpClient();
http.getData(1, 2, 3, 4);
