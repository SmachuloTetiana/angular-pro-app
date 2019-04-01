import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Store } from './../store';

import { AuthModule } from '../auth/auth.module';

import { AppComponent } from './app.component';

export const ROUTES: Routes = [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule
  ],
  providers: [
    Store
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
var config = {
  apiKey: "AIzaSyDaHvifBzqvfYd_SxgwSEPAoi2SW6ujGTM",
  authDomain: "fitness-app-3a53e.firebaseapp.com",
  databaseURL: "https://fitness-app-3a53e.firebaseio.com",
  projectId: "fitness-app-3a53e",
  storageBucket: "fitness-app-3a53e.appspot.com",
  messagingSenderId: "580142464858"
};
*/
