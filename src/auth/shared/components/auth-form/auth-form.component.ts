import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'auth-form',
    styleUrls: ['auth-form.component.css'],
    template: `
        <div class="auth-form">
            <form [formGroup]="form" (ngSubmit)="onSubmit()">

                <ng-content select="h2"></ng-content>

                <label>
                    <div class="form-group">
                        <input 
                            class="form-control"
                            type="email" 
                            placeholder="Email adress"
                            formControlName="email">
                        <div class="error" *ngIf="emailFormat">
                            Invalid email format
                        </div>
                    </div>

                    <div class="form-group">
                    <input 
                        class="form-control"
                        type="password" 
                        placeholder="Enter password"
                        formControlName="password">
                    <div class="error" *ngIf="passwordInvalid">
                        Password is required
                    </div>
                    </div>
                </label>

                <ng-content select=".error"></ng-content>

                <div class="auth-form__action">
                    <ng-content select="button"></ng-content>
                </div>

                <div class="auth-form__toogle">
                    <ng-content select="a"></ng-content>
                </div>
            </form>
        </div>
    `
})

export class AuthFormComponent {

    @Output()
    submitted = new EventEmitter<FormGroup>();

    form = this.fb.group({
        email: ['', Validators.email],
        password: ['', Validators.required]
    })

    constructor(
        private fb: FormBuilder
    ) {}

    onSubmit() {
        if(this.form.valid) {
            this.submitted.emit(this.form);
        }
    }

    get passwordInvalid() {
        const control = this.form.get('password');
        return control.hasError('required') && control.touched;
    }

    get emailFormat() {
        const control = this.form.get('email');
        return control.hasError('email') && control.touched;
    }
}