import { Headers, Http, Response, RequestOptions } from '@angular/http';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {OnInit, Component} from '@angular/core';
import { PersonService } from '../services/person.service';
import {Person} from '../app.person';

@Component({
    moduleId: module.id,
    selector: 'personedit',
    templateUrl: './personedit.component.html',

    providers: [PersonService]
})
export class PersonEditComponent {
    person: Person;
    constructor(private service: PersonService, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        // subscribe to router event
        this.activatedRoute.params.subscribe((params: Params) => {
            let userId = params['id'];

            this.service.searchByID(userId).subscribe(person => this.person = person);
            console.log(this.person);

        });
    }
}





