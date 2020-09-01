import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '@app/_models/hero';
// import * as img from '../../assets/img_avatar.png'   ;

@Component({ templateUrl: 'hero-card.component.html', selector: 'app-hero-card' })
export class HeroCardComponent implements OnInit {

    @Input()
    hero: Hero;

    constructor() { }

    ngOnInit() {
    }


}