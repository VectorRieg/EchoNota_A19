export interface ProfessorResponse {
  id: number;
  usuarioId: number;
  codigo: string;
  usuario?: {
    id: number;
    nome: string;
    email: string;
    tipoUsuario: string;
  };
}
