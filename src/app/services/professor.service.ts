import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Professor } from '../entidade/professor';

@Injectable({
  providedIn: 'root',
})
export class ProfessorService {
  private apiUrl = 'http://localhost:8080/api/professores';

  constructor(private http: HttpClient) {}

  // Lista todos os professores
  listar(): Observable<Professor[]> {
    return this.http.get<Professor[]>(this.apiUrl);
  }

  // Busca por id
  buscarPorId(id: number): Observable<Professor> {
    return this.http.get<Professor>(`${this.apiUrl}/${id}`);
  }

  // Cria professor
  criar(professor: Professor): Observable<Professor> {
    return this.http.post<Professor>(this.apiUrl, professor);
  }

  // Atualiza professor
  atualizar(id: number, professor: Professor): Observable<Professor> {
    return this.http.put<Professor>(`${this.apiUrl}/${id}`, professor);
  }

  // Deleta professor
  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Busca pelo código do prof
  buscarPorCodigo(codigo: string): Observable<Professor> {
    return this.http.get<Professor>(`${this.apiUrl}/codigo/${codigo}`);
  }
}
