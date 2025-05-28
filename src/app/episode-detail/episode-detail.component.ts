import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-episode-detail',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './episode-detail.component.html',
  styles: [`
    .character-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      padding: 20px;
    }
    .character-card {
      border: 1px solid #ddd;
      border-radius: 10px;
      padding: 10px;
      text-align: center;
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .character-img {
      border-radius: 10px;
      width: 100%;
      height: auto;
    }
    .character-name {
      font-weight: bold;
      margin-top: 10px;
    }
    .character-info {
      color: #555;
    }
  `]
})
export class EpisodeDetailComponent implements OnInit {
  characters: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get<any>(`https://rickandmortyapi.com/api/episode/${id}`).subscribe(episode => {
      const characterUrls = episode.characters;

      this.http.get<any[]>(characterUrls.join(',')).subscribe(data => {
        // Si es un solo personaje, devuelve un objeto, no un arreglo
        this.characters = Array.isArray(data) ? data : [data];
      });
    });
  }
}

