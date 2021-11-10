import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tecnico } from '../models/tecnico';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  baseUrl: String = environment.baseUrl;
  
  constructor(
    private http : HttpClient,
    private snack: MatSnackBar) {}

  findAll():Observable<Tecnico[]> {
    const url = this.baseUrl + "/tecnico"
    return this.http.get<Tecnico[]>(url);
  }

/** MÉTODO DE BUSCAR UM TÉCNICO PELO ID. ELE PREENCHE OS CAMPOS DO FORMULARIO PARAARIO NÃO 
 * PRECISAR DIGITAR NA HORA DE ATUALIZAR OS DADOS DO TECNICO*/
  findById(id : any):Observable<Tecnico>{
    const url = this.baseUrl + "/tecnico/" + id;
    return this.http.get<Tecnico>(url);
  }

/** MÉTODO PARA CRIAR UM NOVO TÉCNICO*/
  create(tecnico: Tecnico):Observable<Tecnico> {
    const url = this.baseUrl + "/tecnico";
    return this.http.post<Tecnico>(url, tecnico);
  }

  /** MÉTODO DE ATUALIZAR TECNICO */
  update(tecnico: Tecnico):Observable<Tecnico> {
    const url = this.baseUrl + "/tecnico/" + tecnico.id;
    return this.http.put<Tecnico>(url, tecnico);
  }
  
  /** MÉTODO DE DELETAR TECNICO */
  delete(id : any):Observable<void> {
    const url = this.baseUrl + "/tecnico/" + id;
    return this.http.delete<void>(url);
  }

  message(msg: String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }

}
