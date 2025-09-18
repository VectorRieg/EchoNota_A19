export interface AtividadeResponse {
  id: number;
  titulo: string;
  descricao: string;
  tipo: string;
  habilidade: string;
  cursoId: number;
  professorId: number;
  valorMaximo: number;
  dataInicio: string;
  dataFim: string;
  ativo: boolean;
  curso?: {
    id: number;
    nome: string;
    tipo: string;
    subnivel: number;
  };
  professor?: {
    id: number;
    nome: string;
    codigo: string;
  };
}
