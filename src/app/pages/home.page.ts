import { Component, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { selectedProfile } from '../signals/profile.signal';
import { Profile } from '../models/profile.model';
import { ProfileCardComponent } from '../components/profile-card/profile-card.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterModule, MatToolbarModule, ProfileCardComponent],
    template: `
        <mat-toolbar color="primary">My Angular 19 Profile</mat-toolbar>
        <div class="home">
            @if (profile()) {
                <app-profile-card
                    [profile]="profile()!"
                    (viewDetails)="goToDetails()"
                />
            }
        </div>
    `,
    styles: [`.home { padding: 2rem; }`]
})

export default class HomePage {
    profile = signal<Profile | null>(null);

    constructor(private profileService: ProfileService, private router: Router) {
        effect(()=> {
            this.profile.set(this.profileService['profileSubject'].value);
        });
    }

    goToDetails() {
        selectedProfile.set(this.profile());
        this.router.navigate(['/details']);
    }
}