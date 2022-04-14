"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logClass(target) {
    return class extends target {
        constructor() {
            super(...arguments);
            this.apiUrl = 'http://www.chinavanes.com';
        }
        getData() {
            this.apiUrl = 'update:' + this.apiUrl;
            console.log(this.apiUrl);
        }
    };
}
let HttpClient = /** @class */ (() => {
    let HttpClient = class HttpClient {
        constructor() {
            this.apiUrl = 'www.chinavanes.com';
        }
        getData() {
            console.log(this.apiUrl);
        }
    };
    HttpClient = __decorate([
        logClass
    ], HttpClient);
    return HttpClient;
})();
var http = new HttpClient();
http.getData();
