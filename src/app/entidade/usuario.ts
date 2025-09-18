export class Usuario {
  id: number = 0;
  nome: string = '';
  email: string = '';
  senha?: string;
  tipoUsuario: 'admin' | 'professor' | 'aluno' = 'aluno'; // Com o aluno = aluno ele deixa com que não exista outro tipo de usuario
}
