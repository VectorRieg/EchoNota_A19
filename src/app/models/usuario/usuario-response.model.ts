export interface UsuarioResponse {
  id: number;
  nome: string;
  email: string;
  tipoUsuario: 'admin' | 'professor' | 'aluno';
}
