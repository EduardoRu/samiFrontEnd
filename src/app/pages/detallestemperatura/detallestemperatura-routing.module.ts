import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallestemperaturaPage } from './detallestemperatura.page';

const routes: Routes = [
  {
    path: '',
    component: DetallestemperaturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallestemperaturaPageRoutingModule {}
