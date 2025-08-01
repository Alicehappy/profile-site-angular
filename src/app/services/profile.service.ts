import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Profile } from '../models/profile.model';

@Injectable({ providedIn: 'root'})
export class ProfileService {
    private profileSubject = new BehaviorSubject<Profile>({
        name: 'Sophia',
        role: 'Frontend Engineer',
        location: 'Toronto',
        skills: ['Angular', 'RxJS', 'SCSS'],
    });

    profile$ = this.profileSubject.asObservable();
}