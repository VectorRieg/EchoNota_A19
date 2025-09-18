export interface UsuarioRequest {
  nome: string;
  email: string;
  senha?: string;
  tipoUsuario: 'admin' | 'professor' | 'aluno';
}
