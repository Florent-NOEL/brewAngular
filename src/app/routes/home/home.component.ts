import { HoublonModel } from 'src/app/models/houblon-model';
import { RecetteStep1 } from './../../models/recette-step1';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  recetteStep1!: RecetteStep1;
  EbcFinal!: number;

  listMassHoublon!: number[];
  volumeFinal!: number;
  constructor() {
    this.recetteStep1 = new RecetteStep1(0, 0, 0, 0, 0, 0);
    this.EbcFinal = 0;
  }
  addRecette(enventElement: any) {
    this.recetteStep1 = enventElement;
    if (this.recetteStep1 != undefined) {
      this.volumeFinal = this.recetteStep1.volumeFinal!;
    }
  }
  addEbc(enventElement: any) {
    this.EbcFinal = enventElement;
  }
  addMassHoublon(enventElement: any) {
    this.listMassHoublon = enventElement.masseEnGramme;
  }
}
