"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var person_service_1 = require("../services/person.service");
var app_person_1 = require("../app.person");
var RegisterComponent = (function () {
    function RegisterComponent(service) {
        this.service = service;
    }
    RegisterComponent.prototype.addContact = function (firstname, lastname, address, email, state, city, county, zip) {
        var _this = this;
        this.person = new app_person_1.Person();
        this.person.FirstName = firstname;
        this.person.LastName = lastname;
        this.person.Address = address;
        this.person.Email = email;
        this.person.State = state;
        this.person.City = city;
        this.person.County = county;
        this.person.Zip = zip;
        this.service.addPerson(this.person, new http_1.Headers({ 'Content-Type': 'application/json' })).subscribe(function (id) { return _this.id = id; });
        firstname = null;
        lastname = null;
        address = null;
        email = null;
        state = null;
        city = null;
        county = null;
        zip = null;
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'register',
        templateUrl: './register.component.html',
        providers: [person_service_1.PersonService]
    }),
    __metadata("design:paramtypes", [person_service_1.PersonService])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map