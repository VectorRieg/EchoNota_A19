export interface NotaResponse {
  id: number;
  valor: number;
  comentario: string;
  alunoId: number;
  atividadeId: number;
  professorId: number;
  habilidade: string;
  finalizada: boolean;
  percentual: number;
  aprovado: boolean;
  aluno?: {
    id: number;
    matricula: number;
    nome: string;
    email: string;
  };
  atividade?: {
    id: number;
    titulo: string;
    tipo: string;
    habilidade: string;
    valorMaximo: number;
  };
  professor?: {
    id: number;
    nome: string;
    codigo: string;
  };
}
