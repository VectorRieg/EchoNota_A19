import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aluno } from '../entidade/aluno';

@Injectable({
  providedIn: 'root',
})
export class AlunoService {
  private apiUrl = 'http://localhost:8080/api/alunos';

  constructor(private http: HttpClient) {}

  //Lista todos os alunos
  listar(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.apiUrl);
  }

  //Busca por id
  buscarPorId(id: number): Observable<Aluno> {
    return this.http.get<Aluno>(`${this.apiUrl}/${id}`);
  }

  // Cria aluno
  criar(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(this.apiUrl, aluno);
  }

  // Atualiza aluno
  atualizar(id: number, aluno: Aluno): Observable<Aluno> {
    return this.http.put<Aluno>(`${this.apiUrl}/${id}`, aluno);
  }

  // Deleta aluno
  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Busca por curso
  buscarPorCurso(cursoId: number): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${this.apiUrl}/curso/${cursoId}`);
  }

  // Busca por nivel de ensino
  buscarPorNivel(nivel: string): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${this.apiUrl}/nivel/${nivel}`);
  }

  //Busca por situação
  buscarPorSituacao(situacao: string): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${this.apiUrl}/situacao/${situacao}`);
  }

  // Busca por matricula
  buscarPorMatricula(matricula: string): Observable<Aluno> {
    return this.http.get<Aluno>(`${this.apiUrl}/matricula/${matricula}`);
  }
}
