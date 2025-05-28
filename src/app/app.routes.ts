import { Routes } from '@angular/router';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';

export const routes: Routes = [
  { path: '', component: EpisodeListComponent },
  { path: 'episode/:id', component: EpisodeDetailComponent },
];

