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
  luminosidadAmbiental!: number;
  precipitacionAmbiental!: number;
  registros: any[] = [];
  totalRegistros: number = 0;
  promedioTemperatura = 0;
  promedioHumedad = 0; 
  promedioLuminosidad = 0;
  promedioPrecipitacion = 0; 

  constructor(private router: Router, private firebaseService: FirebaseService) { 
    
  }

  irARuta() {
    this.router.navigateByUrl('/detallestemperatura');
  }

  ngOnInit() {
    this.firebaseService.getTemperatura()
      .subscribe((data: any) => {
        this.temperaturaAmbiental = data.temperatura;
        this.humedadAmbiental = data.humedad;
        this.luminosidadAmbiental = data.luminosidad;
        this.precipitacionAmbiental = data.precipitacion;
        console.log(data);
  
        this.registros = data.map((registro: any) => {
          return {
            ...registro,
            temp_ambiental: registro.temp_ambiental / 100,
            hum_ambiental: registro.hum_ambiental / 100,
            lum_ambiental: registro.lum_ambiental / 100,
            prep_ambiental: registro.prep_ambiental / 100,
          };
        });
  
        const promediosPorDocumento: { [documento: string]: { sumTemp: number, sumHumedad: number, sumLum: number, sumPrep: number, count: number } } = {};
  
        this.registros.forEach((registro: any) => {
          const documento = registro.documento;
          promediosPorDocumento[documento] = promediosPorDocumento[documento] || { sumTemp: 0, sumHumedad: 0, sumLum: 0, sumPrep: 0, count: 0 };
  
          promediosPorDocumento[documento].sumTemp += registro.temp_ambiental;
          promediosPorDocumento[documento].sumHumedad += registro.hum_ambiental;
          promediosPorDocumento[documento].sumLum += registro.lum_ambiental;
          promediosPorDocumento[documento].sumPrep += registro.prep_ambiental;
          promediosPorDocumento[documento].count++;
        });

        const promediosFinales = Object.keys(promediosPorDocumento).map(documento => ({
          documento,
          promedioTemp: promediosPorDocumento[documento].sumTemp / promediosPorDocumento[documento].count,
          promedioHumedad: promediosPorDocumento[documento].sumHumedad / promediosPorDocumento[documento].count,
          promedioLum: promediosPorDocumento[documento].sumLum / promediosPorDocumento[documento].count,
          promedioPrep: promediosPorDocumento[documento].sumPrep / promediosPorDocumento[documento].count
        }));
  
        if (promediosFinales.length > 0) {
          this.promedioTemperatura = promediosFinales[0].promedioTemp;
          this.promedioHumedad = promediosFinales[0].promedioHumedad;
          this.promedioLuminosidad = promediosFinales[0].promedioLum;
          this.promedioPrecipitacion = promediosFinales[0].promedioPrep;
        }
  
        console.log(promediosFinales);
      });

      
  }
  
  async viewProfile() {
    await this.router.navigateByUrl('/perfil', { replaceUrl: true });
  }
  
}

