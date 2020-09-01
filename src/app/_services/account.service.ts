import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { Trainer } from '@app/_models';
import { Hero } from '@app/_models/hero';

@Injectable({ providedIn: 'root' })
export class AccountService {
    private trainerSubject: BehaviorSubject<Trainer>;
    public trainer: Observable<Trainer>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.trainerSubject = new BehaviorSubject<Trainer>(JSON.parse(localStorage.getItem('user')));
        this.trainer = this.trainerSubject.asObservable();
    }

    public get trainerValue(): Trainer {
        return this.trainerSubject.value;
    }

    login(username, password) {
        return this.http.post<Trainer>(`${environment.apiUrl}/Trainer/authenticate`, { username, password })
            .pipe(map(trainer => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('trainer', JSON.stringify(trainer));
                this.trainerSubject.next(trainer);
                return trainer;
            }));
    }

    logout() {
        // remove trainer from local storage and set current trainer to null
        localStorage.removeItem('trainer');
        this.trainerSubject.next(null);
        this.router.navigate(['/account/login']);
    }

    register(trainer: Trainer) {
        return this.http.post(`${environment.apiUrl}/Trainer/register`, trainer);
    }

    getHeroes() {
        return this.http.get<Hero[]>(`${environment.apiUrl}/Hero/GetHerosByTrainer/${this.trainerValue.id}`);
    }

    
}