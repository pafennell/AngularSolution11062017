import { Component } from '@angular/core';
import { PersonService } from '../services/person.service';
import {Person} from '../app.person';

@Component({
    moduleId: module.id,
    selector: 'personSearch',
    templateUrl: './personSearch.component.html',

    providers: [PersonService]
})

export class PersonSearch {
    person: Person;
    constructor(private service: PersonService) { }


    search(searchString: string) {
        this.service.search(searchString).subscribe(person => this.person = person);
        console.log(this.person);
    }

}

