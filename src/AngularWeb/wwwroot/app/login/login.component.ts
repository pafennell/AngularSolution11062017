import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './login.component.html',
})

export class LoginComponent {

   

    public logIn(username: string, password: string): void {
        alert(username + ' ' + password);
    }
}