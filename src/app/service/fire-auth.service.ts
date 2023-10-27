import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class FireAuthService {

  constructor(
    private auth:Auth
  ) { }

  // Función para registrar a nuevos usuarios en la plataforma
  async register(email:any, password:any){
    try{
      const user = await createUserWithEmailAndPassword(this.auth, email, password);
      return user
    }catch(error){
      return null
    }
  };

  // Función para inicar sesión
  async login({email, password}:any){
    try {
      const user = await signInWithEmailAndPassword(this.auth, email, password);
      return user
    } catch (error) {
      return null
    }
  };

  // Función para cerrar sesión
  logout(){
    return signOut(this.auth);
  }
}
