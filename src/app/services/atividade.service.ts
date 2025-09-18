import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Atividade } from '../entidade/atividade';

@Injectable({
  providedIn: 'root',
})
export class AtividadeService {
  private apiUrl = 'http://localhost:8080/api/atividades';

  constructor(private http: HttpClient) {}

  // Lista todas as atividades
  listar(): Observable<Atividade[]> {
    return this.http.get<Atividade[]>(this.apiUrl);
  }

  // Busca pelo id
  buscarPorId(id: number): Observable<Atividade> {
    return this.http.get<Atividade>(`${this.apiUrl}/${id}`);
  }

  // Cria atividade
  criar(atividade: Atividade): Observable<Atividade> {
    return this.http.post<Atividade>(this.apiUrl, atividade);
  }

  // Atualiza atividade
  atualizar(id: number, atividade: Atividade): Observable<Atividade> {
    return this.http.put<Atividade>(`${this.apiUrl}/${id}`, atividade);
  }

  // Deleta atividade
  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Busca por curso
  buscarPorCurso(cursoId: number): Observable<Atividade[]> {
    return this.http.get<Atividade[]>(`${this.apiUrl}/curso/${cursoId}`);
  }

  // Busca por professor
  buscarPorProfessor(professorId: number): Observable<Atividade[]> {
    return this.http.get<Atividade[]>(
      `${this.apiUrl}/professor/${professorId}`
    );
  }

  // Busca por habilidade de ingles
  buscarPorHabilidade(habilidade: string): Observable<Atividade[]> {
    return this.http.get<Atividade[]>(
      `${this.apiUrl}/habilidade/${habilidade}`
    );
  }

  // Busca por tipo de atividade
  buscarPorTipo(tipo: string): Observable<Atividade[]> {
    return this.http.get<Atividade[]>(`${this.apiUrl}/tipo/${tipo}`);
  }

  // Busca atividades ativas em um período
  buscarPorPeriodo(
    dataInicio: string,
    dataFim: string
  ): Observable<Atividade[]> {
    return this.http.get<Atividade[]>(
      `${this.apiUrl}/periodo?inicio=${dataInicio}&fim=${dataFim}`
    );
  }
}
