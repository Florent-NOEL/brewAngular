import { CalculService } from './../../services/calcul.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recette-form2',
  templateUrl: './recette-form2.component.html',
  styleUrls: ['./recette-form2.component.css'],
})
export class RecetteForm2Component {
  ebc!: number | null;
  weightGrain!: number | null;
  ebcArray = new Array();
  weightGrainArray = new Array();
  volume!: number;
  constructor(private calculServ: CalculService) {}
  @Output()
  ebcTotalCalcule = new EventEmitter<any>();

  ngOnInit(): void {}
  calculStep2() {
    this.pushMalt();

    this.calculServ
      .calculEbcTotal(this.ebcArray, this.weightGrainArray, this.volume)
      .subscribe((ebcCalc) => {
        this.ebcTotalCalcule.emit(ebcCalc);
        this.ebcArray = new Array();
        this.weightGrainArray = new Array();
      });
  }
  pushMalt() {
    if (
      this.ebc != null &&
      this.ebc != 0 &&
      this.weightGrain != null &&
      this.weightGrain != 0
    ) {
      this.ebcArray.push(this.ebc);
      this.weightGrainArray.push(this.weightGrain);
      this.ebc = null;
      this.weightGrain = null;
    }
  }
}
