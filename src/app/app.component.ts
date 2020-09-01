import { Component } from '@angular/core';

import { AccountService } from './_services';
import { Trainer } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    trainer: Trainer;

    constructor(private accountService: AccountService) {
        this.accountService.trainer.subscribe(x => this.trainer = x);
    }

    logout() {
        this.accountService.logout();
    }
}