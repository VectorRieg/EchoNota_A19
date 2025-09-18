import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nota } from '../entidade/nota';

@Injectable({
  providedIn: 'root',
})
export class NotaService {
  private apiUrl = 'http://localhost:8080/api/notas';

  constructor(private http: HttpClient) {}

  //Lista todas as notas
  listar(): Observable<Nota[]> {
    return this.http.get<Nota[]>(this.apiUrl);
  }

  //Busca por id
  buscarPorId(id: number): Observable<Nota> {
    return this.http.get<Nota>(`${this.apiUrl}/${id}`);
  }

  //Atualiza nota(é pra nota já ser criada auto)
  atualizar(id: number, nota: Nota): Observable<Nota> {
    return this.http.put<Nota>(`${this.apiUrl}/${id}`, nota);
  }

  //Busca notas por aluno
  buscarPorAluno(alunoId: number): Observable<Nota[]> {
    return this.http.get<Nota[]>(`${this.apiUrl}/aluno/${alunoId}`);
  }

  //Busca notas por atividade
  buscarPorAtividade(atividadeId: number): Observable<Nota[]> {
    return this.http.get<Nota[]>(`${this.apiUrl}/atividade/${atividadeId}`);
  }

  //Busca notas por curso (todas as notas dos alunos de um curso)
  buscarPorCurso(cursoId: number): Observable<Nota[]> {
    return this.http.get<Nota[]>(`${this.apiUrl}/curso/${cursoId}`);
  }

  // Busca notas por habilidade de ingles
  buscarPorHabilidade(habilidade: string): Observable<Nota[]> {
    return this.http.get<Nota[]>(`${this.apiUrl}/habilidade/${habilidade}`);
  }

  // Busca nota especifica de um aluno em uma atividade
  buscarNotaEspecifica(alunoId: number, atividadeId: number): Observable<Nota> {
    return this.http.get<Nota>(
      `${this.apiUrl}/aluno/${alunoId}/atividade/${atividadeId}`
    );
  }

  // Finaliza a nota
  finalizarNota(id: number): Observable<Nota> {
    return this.http.patch<Nota>(`${this.apiUrl}/${id}/finalizar`, {});
  }

  // Busca relatório de notas por curso (pra dashboard)
  relatorioNotasCurso(cursoId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/relatorio/curso/${cursoId}`);
  }

  // Calcula a média
  calcularMediaAluno(alunoId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/media/aluno/${alunoId}`);
  }
}
