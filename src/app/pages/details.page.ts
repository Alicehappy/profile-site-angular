import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { selectedProfile } from '../signals/profile.signal';

@Component({
    selector: 'app-details',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="details">
            <h2>Details</h2>
                @if (profile()) {
                    <p>Viewing: {{ profile()!.name }}</p>
                } @else {
                    <p>No profile selected.</p>
                }
        </div>
    `,
    styles: [`.details { padding: 2rem; }`]
})
export default class DetailsPage {
    profile = selectedProfile;
}