import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './hero-routing.module';
import { LayoutComponent } from './layout.component';
import { HeroListComponent } from './hero-list.component';
import { HeroCardComponent } from './hero-card.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HeroesRoutingModule
        
    ],
    declarations: [
        LayoutComponent,
        HeroListComponent,
        HeroCardComponent
    ]
})
export class HeroesModule { }