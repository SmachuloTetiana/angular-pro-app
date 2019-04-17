import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../../../auth/shared/services/auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppHeaderComponent {

    @Input()
    user: User;

    @Output()
    logout = new EventEmitter<any>();

    logoutUser() {
        this.logout.emit();
    }
}