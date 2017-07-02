/// <reference path="services/person.service.ts" />

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HttpModule } from "@angular/http";
import { NavComponent } from "./navbar/navbar.component";
import { AppRoutingModule } from "./app.routing";
import { FormsModule } from "@angular/forms";
import { ContactComponent } from "./contact/contact.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from './home/home.component';
import { PersonSearch } from './personSearch/personSearch.component';
import { RegisterComponent } from './register/register.component';
import { PersonEditComponent } from './personedit/personedit.component';

@NgModule({
    imports: [BrowserModule, FormsModule, AppRoutingModule, HttpModule],
    declarations: [
        AppComponent,
        NavComponent,
        ContactComponent,
        LoginComponent,
        HomeComponent,
        PersonSearch,
        RegisterComponent,
        PersonEditComponent  
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }