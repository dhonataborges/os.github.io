import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/cliente';
import { Tecnico } from '../models/tecnico';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl: String = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private snack: MatSnackBar) { }

  findAll(): Observable<Cliente[]> {
    const url = this.baseUrl + "/cliente"
    return this.http.get<Cliente[]>(url);
  }

  /** MÉTODO DE BUSCAR UM TÉCNICO PELO ID. ELE PREENCHE OS CAMPOS DO FORMULARIO PARAARIO NÃO 
   * PRECISAR DIGITAR NA HORA DE ATUALIZAR OS DADOS DO CLIENTE*/
  findById(id: any): Observable<Cliente> {
    const url = this.baseUrl + "/cliente/" + id;
    return this.http.get<Cliente>(url);
  }

  /** MÉTODO PARA CRIAR UM NOVO CLIENTE*/
  create(cliente: Cliente): Observable<Cliente> {
    const url = this.baseUrl + "/cliente";
    return this.http.post<Cliente>(url, cliente);
  }

  /** MÉTODO DE ATUALIZAR CLIENTE */
  update(cliente: Cliente): Observable<Cliente> {
    const url = this.baseUrl + "/cliente/" + cliente.id;
    return this.http.put<Cliente>(url, cliente);
  }

  /** MÉTODO DE DELETAR CLIENTE */
  delete(id : any):Observable<void> {
    const url = this.baseUrl + "/cliente/" + id;
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
