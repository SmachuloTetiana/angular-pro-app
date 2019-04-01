import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [
    {
        path: 'auth',
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'login' },
            { path: 'login', loadChildren: './login/login.module#LoginModule'},
            { path: 'register', loadChildren: './register/register.module#RegisterModule' }
        ]
    }
]

export const firebaseConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyDaHvifBzqvfYd_SxgwSEPAoi2SW6ujGTM",
  authDomain: "fitness-app-3a53e.firebaseapp.com",
  databaseURL: "https://fitness-app-3a53e.firebaseio.com",
  projectId: "fitness-app-3a53e",
  storageBucket: "fitness-app-3a53e.appspot.com",
  messagingSenderId: "580142464858"
};

@NgModule ({
    imports: [
        RouterModule.forChild(ROUTES),
        CommonModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        SharedModule.forRoot()
    ]
})

export class AuthModule {

}