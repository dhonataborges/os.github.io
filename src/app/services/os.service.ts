import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OS } from '../models/os';

@Injectable({
  providedIn: 'root'
})
export class OsService {

  baseUrl: String = environment.baseUrl;
  
  constructor(
    private http : HttpClient,
    private snack: MatSnackBar) {}

  findAll():Observable<OS[]> {
    const url = this.baseUrl + "/os"
    return this.http.get<OS[]>(url);
  }

/** MÉTODO DE BUSCAR UM ORDEM DE SERVIÇO PELO ID. ELE PREENCHE OS CAMPOS DO FORMULARIO PARAARIO NÃO 
 * PRECISAR DIGITAR NA HORA DE ATUALIZAR OS DADOS DO ORDEM DE SERVIÇO*/
  findById(id : any):Observable<OS>{
    const url = this.baseUrl + "/os/" + id;
    return this.http.get<OS>(url);
  }

/** MÉTODO PARA CRIAR UM NOVO ORDEM DE SERVIÇO*/
  create(os: OS):Observable<OS> {
    const url = this.baseUrl + "/os";
    return this.http.post<OS>(url, os);
  }

  /** MÉTODO DE ATUALIZAR ORDEM DE SERVIÇO */
  update(os: OS):Observable<OS> {
    const url = this.baseUrl + "/os";
    return this.http.put<OS>(url, os);
  }
  
  /** MÉTODO DE DELETAR ORDEM DE SERVIÇO */
  delete(id : any):Observable<void> {
    const url = this.baseUrl + "/os/" + id;
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
