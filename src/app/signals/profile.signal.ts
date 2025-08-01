import { signal } from '@angular/core';
import { Profile } from '../models/profile.model';

export const selectedProfile = signal<Profile | null>(null);