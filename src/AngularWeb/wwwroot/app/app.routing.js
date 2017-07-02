"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var contact_component_1 = require("./contact/contact.component");
var login_component_1 = require("./login/login.component");
var home_component_1 = require("./home/home.component");
var personSearch_component_1 = require("./personSearch/personSearch.component");
var register_component_1 = require("./register/register.component");
var personedit_component_1 = require("./personedit/personedit.component");
var routes = [
    {
        path: '',
        component: home_component_1.HomeComponent,
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent,
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent,
    },
    {
        path: 'personSearch',
        component: personSearch_component_1.PersonSearch,
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent,
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent,
    },
    {
        path: 'personedit',
        component: personedit_component_1.PersonEditComponent,
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(routes)
        ],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routing.js.map