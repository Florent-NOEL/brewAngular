import { Component, Input } from '@angular/core';
import { HoublonModel } from 'src/app/models/houblon-model';
import { RecetteStep1 } from 'src/app/models/recette-step1';

@Component({
  selector: 'app-recette-card',
  templateUrl: './recette-card.component.html',
  styleUrls: ['./recette-card.component.css'],
})
export class RecetteCardComponent {
  @Input()
  recetteStep1!: RecetteStep1;
  @Input()
  EbcFinal!: number;
  @Input()
  listMassHoublon!: number[];
}
