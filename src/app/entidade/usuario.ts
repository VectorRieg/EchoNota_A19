export class Usuario {
  id: number = 0;
  nome: string = '';
  email: string = '';
  senha?: string;
  tipo: 'admin' | 'professor' | 'aluno' = 'aluno';
  ativo: boolean = true;
  criadoEm: Date = new Date();
}
