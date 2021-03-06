import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store } from '../../../../store';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';

import { MealsService, Meal } from '../../../shared/services/meals/meals.service';


@Component({
    selector: 'meals',
    templateUrl: './meals.component.html'
})

export class MealsComponent implements OnInit, OnDestroy{

    meals$: Observable<Meal[]>;
    subscription: Subscription;

    constructor(
        private store: Store,
        private mealsService: MealsService
    ) {}

    ngOnInit() {
        this.meals$ = this.store.select<Meal[]>('meals');
        this.subscription = this.mealsService.meals$.subscribe();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
