import { Injectable } from '@angular/core';
// Librerias para gestionar la colección de datos en firebase
// Obtener, editar, eliminar y agregar infromación de firestore
import{
  doc,
  collection,
  collectionData,
  docData,
  Firestore,
  deleteDoc,
  addDoc,
  updateDoc
} from '@angular/fire/firestore';
// Gestión de los documentos encontrados
import { Observable } from 'rxjs';
// Validar que las operaciones se realizan bajo el "Auth"
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private auth:Auth,
    private firestore:Firestore,
  ) { }

  // Funciones de ejemplo
  /*
  OBTENER REGISTROS
  getTemperatura(): Observable<any[]>{
    const queryRef = doc(this.firestore, 'temperatura');
    return docData(queryRef, {idField: id}) as Observable<any[]>
  }
  OBTENER UN REGISTRO POR SU ID
  getTemperaturaById(id:any): Observable<any[]>{
    const queryRef = doc(this.firestore, `temperatura/${data.id}`);
    return docData(queryRef, {idField: id}) as Observable<any[]>
  }
  AGREGAR REGISTROS
  addTemperatura(data:any) {
    const queryRef = doc(this.firestore, 'temperatura');
    return addDoc(queryRef, data);
  }
  EDITAR REGISTROS
  updateTemperatura(data:any){
    const queryRef = doc(this.firestore, `temperatura/${data.id}`);
    return updateDoc(queryRef, {data});
  }
  ELIMINAR REGISTROS
  deleteTemperatura(data:any){
    const queryRef = doc(this.firestore, `temperatura/${data.id}`);
    return deleteDoc(queryRef);
  }
  */
}
