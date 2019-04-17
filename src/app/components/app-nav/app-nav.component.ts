import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './app-nav.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppNavComponent {
    constructor() {}
}