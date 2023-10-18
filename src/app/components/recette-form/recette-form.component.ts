import { Component, OnInit } from '@angular/core';
import { CalculService } from 'src/app/services/calcul.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recette-form',
  templateUrl: './recette-form.component.html',
  styleUrls: ['./recette-form.component.css'],
})
export class RecetteFormComponent implements OnInit {
  degre!: number;
  volumeL!: number;
  constructor(private calculServ: CalculService) {}
  @Output()
  recetteCalcule = new EventEmitter<any>();

  ngOnInit(): void {}
  calculStep1() {
    this.calculServ
      .calculBasicRecette(this.degre, this.volumeL)
      .subscribe((recette) => {
        this.recetteCalcule.emit(recette);
      });
  }
}
