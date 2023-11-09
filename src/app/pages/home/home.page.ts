import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/service/firebase.service';
import { distinct } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  temperaturaAmbiental!: number;
  humedadAmbiental!: number;
  registros: any[] = [];

  constructor(private router: Router, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getTemperatura()
      .pipe(distinct()) // Utiliza el operador distinct para filtrar datos duplicados
      .subscribe((data: any) => {
        this.temperaturaAmbiental = data.temperatura;
        this.humedadAmbiental = data.humedad;

        // Dividir los valores por 100
        this.registros = data.map((registro: any) => {
          return {
            ...registro,
            temp_ambiental: registro.temp_ambiental / 100,
            hum_ambiental: registro.hum_ambiental / 100,
          };
        });

        console.log(this.registros);
      });
  }

  async viewProfile() {
    await this.router.navigateByUrl('/perfil', { replaceUrl: true });
  }
}
