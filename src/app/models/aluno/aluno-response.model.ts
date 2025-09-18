export interface AlunoResponse {
  id: number;
  usuarioId: number;
  matricula: number;
  tipo: string;
  situacao: string;
  usuario?: {
    id: number;
    nome: string;
    email: string;
    tipoUsuario: string;
  };
}
