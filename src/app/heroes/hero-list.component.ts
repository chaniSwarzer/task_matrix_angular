import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AccountService } from '@app/_services';

@Component({ templateUrl: 'hero-list.component.html' })
export class HeroListComponent implements OnInit {
    heroes = null;

    constructor(private accountService: AccountService) { }

    ngOnInit() {
        this.accountService.getHeroes()
            .pipe(first())
            .subscribe(heroes => {
                this.heroes = heroes;
                this.heroes = this.heroes.sort((a,b)=> b.currentPower - a.currentPower);
            });
    }


}