import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Component } from '@angular/core';
import { PersonService } from '../services/person.service';
import {Person} from '../app.person';

@Component({
    moduleId: module.id,
    selector: 'register',
    templateUrl: './register.component.html',

    providers: [PersonService]
})
export class RegisterComponent {
    person: Person;
    private id: number;
    constructor(private service: PersonService) {
        
    }

    addContact(firstname: string, lastname: string, address: string, email: string,
                state: string, city: string, county: string, zip: string) {

        this.person = new Person();
        this.person.FirstName = firstname;
        this.person.LastName = lastname;
        this.person.Address = address;
        this.person.Email = email;
        this.person.State = state;
        this.person.City = city;
        this.person.County = county;
        this.person.Zip = zip;

        
        this.service.addPerson(this.person, new Headers({ 'Content-Type': 'application/json' })).subscribe(id => this.id = id);

        firstname = null;
        lastname = null;
        address = null;
        email = null;
        state = null;
        city = null;
        county = null;
        zip = null;
    }
} 