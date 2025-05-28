import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EpisodeService } from '../episode.services';
 

@Component({
  standalone: true,
  selector: 'app-episode-list',
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Listado de Episodios</h2>
    <div *ngIf="episodes.length === 0">Cargando episodios...</div>
    <div *ngFor="let ep of episodes" class="episode-card">
      <h3>{{ ep.episode }} - {{ ep.name }}</h3>
      <p>Emitido: {{ ep.air_date }}</p>
      <a [routerLink]="['/episode', ep.id]"Ver personajes/a>
  `
})
export class EpisodeListComponent implements OnInit {
  episodes: any[] = [];

  constructor(private episodeService: EpisodeService) {}

  ngOnInit() {
    this.episodeService.getEpisodes().subscribe(data => {
      this.episodes = data.results;
    });
  }
}
