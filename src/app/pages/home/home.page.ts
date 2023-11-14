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
  totalRegistros: number = 0;

  constructor(private router: Router, private firebaseService: FirebaseService) { }

  irARuta() {
    this.router.navigateByUrl('/detallestemperatura');
  }

  ngOnInit() {
    this.firebaseService.getTemperatura()
      .pipe(distinct())
      .subscribe((data: any) => {
        this.temperaturaAmbiental = data.temperatura;
        this.humedadAmbiental = data.humedad;
        console.log(data);

        // Dividir los valores por 100
        this.registros = data.map((registro: any) => {
          return {
            ...registro,
            temp_ambiental: registro.temp_ambiental / 100,
            hum_ambiental: registro.hum_ambiental / 100,
          };
        });
        
        this.totalRegistros = this.registros.length;

        console.log(this.registros);
      });
  }

  async viewProfile() {
    await this.router.navigateByUrl('/perfil', { replaceUrl: true });
  }
}

