import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  categorias: string[] = [
    'Flores',
    'Árboles',
    'Plantas de interior',
    'Hierbas',
    'Suculentas',
  ];

  plantas: string[] = [
    'Rosa',
    'Manzana',
    'Cactus',
    'Orquídea',
    'Pino',
  ];

  plantasFiltradas: string[] = [];

  

  constructor(
    private routes:Router
  ) { }

  ngOnInit() {
  }

  async viewProfile(){
    await this.routes.navigateByUrl('/perfil', {replaceUrl: true})
  }

  buscarCategoria(event: any) {
    const categoria = event.target.value.toLowerCase();
    this.plantasFiltradas = this.plantas.filter(planta => planta.toLowerCase().includes(categoria));
  }
}
