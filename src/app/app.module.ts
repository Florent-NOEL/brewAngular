import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './routes/home/home.component';
import { RecetteFormComponent } from './components/recette-form/recette-form.component';
import { FormsModule } from '@angular/forms';
import { AffichageRecetteComponent } from './components/affichage-recette/affichage-recette.component';
import { RecetteForm2Component } from './components/recette-form2/recette-form2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecetteFormComponent,
    AffichageRecetteComponent,
    RecetteForm2Component,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
