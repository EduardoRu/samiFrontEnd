import { Component, OnInit } from '@angular/core';
// Importar libreria para inicar sesión
import { FireAuthService } from '../service/fire-auth.service';
// Importar libreria para efectos vizuales
import { AlertController, LoadingController } from '@ionic/angular';
// Importar libreria para utilizar reactiveForm
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// Importar libreria para redireccionar al HOME
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // Definir variable para almacenar los datos del formaulario
  public userCredentials:FormGroup | any;

  constructor(
    private authService:FireAuthService,
    private loadCtrl: LoadingController,
    private alertCtrl: AlertController,
    private router: Router,
    private formBuilder:FormBuilder
  ) { }

  // Obtener los datos del formarlio
  get email(){
    return this.userCredentials.get('email')
  }
  get password(){
    return this.userCredentials.get('password')
  }

  ngOnInit() {
    // Inizialiar el formulario
    this.userCredentials = this.formBuilder.group({
      email: ['admin@gmail.com', [Validators.required, Validators.email]],
      password: ['admin12345', [Validators.required, Validators.minLength(6)]]
    })
  }

  // Constructor para las alertas
  async showAlert(header:any, message:any) {
		const alert = await this.alertCtrl.create({
			header,
			message,
			buttons: ['OK']
		});
		await alert.present();
	}

  // Iniciar sesión
  async login(){
    const loading = await this.loadCtrl.create({
      message: 'Validando...'
    });
    loading.present();

    const user = await this.authService.login(this.userCredentials.value)
    await loading.dismiss()
    
    if(user){
      this.router.navigateByUrl('home', {replaceUrl: true});
    }else {
      this.showAlert('Inicio fallido', 'Favor de verificar sus datos')
    }
  }

}
