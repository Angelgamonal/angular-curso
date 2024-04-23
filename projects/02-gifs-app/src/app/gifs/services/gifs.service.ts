import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchReponse } from '../interfaces/gifs.interfaces';

@Injectable({ providedIn: 'root' })
export class GifsService {
  gifsList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private apiKey: string = 'NWSxNBfqdqMJXf0smfzyyVEK1Hvp0whN';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
    console.log('gifs service ready');
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((item) => item !== tag);
    }

    this._tagsHistory.unshift(tag);

    this._tagsHistory = this.tagsHistory.splice(0, 10);

    this.saveLocalStorage();
  }

  private saveLocalStorage() {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage() {
    const data = localStorage.getItem('history');
    if (!data) return;

    this._tagsHistory = JSON.parse(data);

    if (this._tagsHistory.length === 0) return;

    this.shearhTag(this._tagsHistory[0]);
  }

  shearhTag(tag: string) {
    if (tag.trim().length === 0) return;

    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', 10);

    this.http
      .get<SearchReponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((resp) => {
        this.gifsList = resp.data;
      });
  }
}
