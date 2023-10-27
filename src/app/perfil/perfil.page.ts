import { Component, OnInit } from '@angular/core';
import { FireAuthService } from '../service/fire-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(
    private authService:FireAuthService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  async logout(){
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

}
