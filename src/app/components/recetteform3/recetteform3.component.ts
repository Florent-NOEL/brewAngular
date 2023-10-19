import { HoublonModel } from './../../models/houblon-model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CalculService } from 'src/app/services/calcul.service';

@Component({
  selector: 'app-recetteform3',
  templateUrl: './recetteform3.component.html',
  styleUrls: ['./recetteform3.component.css'],
})
export class Recetteform3Component {
  acidAlpha!: number | null;
  TauxExtraction!: number | null;
  Proportion!: number | null;
  houblonModelList = new Array();
  houblon!: HoublonModel;
  @Input()
  volume!: number;
  ibuRecherche!: number;
  constructor(private calculServ: CalculService) {}
  @Output()
  massHoublonCalcule = new EventEmitter<any>();

  ngOnInit(): void {}
  calculStep3() {
    this.pushHoublonModel();
    console.log(
      'houblonmodel list from recetteform 3 :' + this.houblonModelList
    );
    this.calculServ
      .calculIbu(this.volume, this.ibuRecherche, this.houblonModelList)
      .subscribe((ibuCalc) => {
        this.massHoublonCalcule.emit(ibuCalc);
        this.houblonModelList = new Array();
      });
  }

  pushHoublonModel() {
    if (
      this.acidAlpha != null &&
      this.acidAlpha != undefined &&
      this.acidAlpha != 0 &&
      this.TauxExtraction != null &&
      this.TauxExtraction != undefined &&
      this.TauxExtraction != 0 &&
      this.Proportion != null &&
      this.Proportion != undefined &&
      this.Proportion != 0
    ) {
      this.houblonModelList.push(
        new HoublonModel(this.acidAlpha, this.TauxExtraction, this.Proportion)
      );

      this.acidAlpha = null;
      this.Proportion = null;
      this.TauxExtraction = null;
    }
  }
}
