import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';

import { Store } from '../store';

import { AuthService, User } from '../auth/shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  
  user$: Observable<User>;
  subscription: Subscription;

  constructor( 
    private store: Store,
    private router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.subscription = this.authService.auth$.subscribe();
    this.user$ = this.store.select<User>('user');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async onLogout() {
      await this.authService.logoutUser();
      this.router.navigate(['/auth/login']);
  }
}
