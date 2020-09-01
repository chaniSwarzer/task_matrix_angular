import { Component } from '@angular/core';

import { Trainer } from '@app/_models';
import { AccountService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    trainer: Trainer;

    constructor(private accountService: AccountService) {
        this.trainer = this.accountService.trainerValue;
    }
}