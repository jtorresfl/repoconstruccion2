import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServiceAdministrarProductos {

  private http = inject(HttpClient);
  private urlProductos = `${environment.apiUrl}/productos`;
  private urlProductoNuevo = `${environment.apiUrl}/producto/marca/1001/nuevo`;

  getProductos(): Observable<any[]> {
   return this.http.get<any[]>(this. urlProductos);
  }

  registrarProducto(p:any): Observable<any[]> {
   return this.http.post<any[]>(this. urlProductoNuevo, p);
  }

}