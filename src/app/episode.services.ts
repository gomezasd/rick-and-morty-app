import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EpisodeService {
  http = inject(HttpClient);
  private apiUrl = 'https://rickandmortyapi.com/api/episode';

  getEpisodes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
