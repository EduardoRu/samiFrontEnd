import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallestemperaturaPageRoutingModule } from './detallestemperatura-routing.module';

import { DetallestemperaturaPage } from './detallestemperatura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallestemperaturaPageRoutingModule
  ],
  declarations: [DetallestemperaturaPage]
})
export class DetallestemperaturaPageModule {}
