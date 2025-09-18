export interface CursoResponse {
  id: number;
  nome: string;
  tipo: string;
  subnivel: number;
  duracaoMeses: number;
  materialDidatico: string;
  tipoTurma: string;
  habilidade: string;
  professorId: number;
  ativo: boolean;
  professor?: {
    id: number;
    nome: string;
    codigo: string;
  };
}
