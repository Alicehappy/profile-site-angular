import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { Profile } from '../../models/profile.model';

@Component({
    selector: 'app-profile-card',
    standalone: true,
    imports: [CommonModule, MatCardModule, MatChipsModule, MatButtonModule],
    templateUrl: './profile-card.component.html',
    styleUrls: ['./profile-card.component.scss']
})

export class ProfileCardComponent {
    @Input() profile!: Profile;
    @Output() viewDetails = new EventEmitter<void>();
}
