import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../entidade/curso';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  private apiUrl = 'http://localhost:8080/api/cursos';

  constructor(private http: HttpClient) {}

  //Lista todos os cursos
  listar(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.apiUrl);
  }

  // Busca pelo id
  buscarPorId(id: number): Observable<Curso> {
    return this.http.get<Curso>(`${this.apiUrl}/${id}`);
  }

  // Cria um curso
  criar(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.apiUrl, curso);
  }

  // Atualiza um curso
  atualizar(id: number, curso: Curso): Observable<Curso> {
    return this.http.put<Curso>(`${this.apiUrl}/${id}`, curso);
  }

  //Deleta um curso
  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  //Buscar pelo tipo de nivel
  buscarPorTipo(tipo: string): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${this.apiUrl}/tipo/${tipo}`);
  }

  //Busca pelo tipo de turma
  buscarPorTipoTurma(tipoTurma: string): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${this.apiUrl}/turma/${tipoTurma}`);
  }

  // Buscar pelo professor
  buscarPorProfessor(professorId: number): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${this.apiUrl}/professor/${professorId}`);
  }
}
