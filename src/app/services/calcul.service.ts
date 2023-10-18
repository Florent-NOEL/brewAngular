import { HoublonModel } from './../models/houblon-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecetteStep1 } from '../models/recette-step1';

@Injectable({
  providedIn: 'root',
})
export class CalculService {
  url: string = 'http://localhost:8080/brew/api/calcul';
  constructor(private httpClient: HttpClient) {}

  public calculIbu(
    voulumeBrassinL: number,
    ibuRecherche: number,
    houblonModelList: HoublonModel[]
  ): Observable<any> {
    let body = {
      voulumeBrassinL: voulumeBrassinL,
      houblonModelList: houblonModelList,
      ibuRecherche: ibuRecherche,
    };
    console.log(body);
    console.log(body.houblonModelList);
    return this.httpClient.post(this.url + '/ibu', body);
  }

  public calculEbcTotal(
    ebc: any[],
    masse: any[],
    volume: number
  ): Observable<any> {
    let body = {
      ebc: ebc,
      weightGrain: masse,
      volume: volume,
    };
    return this.httpClient.post(this.url + '/ebc', body);
  }

  public calculBasicRecette(
    degre: number,
    volumeL: number
  ): Observable<RecetteStep1> {
    let body = {
      volumeFinalenL: volumeL,
      degreAlcool: degre,
    };
    return this.httpClient.post(this.url + '/basic-recette', body);
  }
}
