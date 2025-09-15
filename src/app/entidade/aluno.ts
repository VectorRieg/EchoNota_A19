const SITUACAO_ALUNO = {
  ESTUDANDO: 'estudando',
  CONCLUIDO: 'concluido',
  TRANCADO: 'trancado',
  EVADIDO: 'evadido',
} as const;

export class Aluno {
  id: number = 0;
  usuarioId: number = 0;
  matricula: string = ''; // "2024001"
  cursoAtualId: number = 0; // Nível que está cursando
  nivelAtual: string = 'basic'; // basic, intermediate, etc.
  dataInicio: Date = new Date(); // Quando começou na escola
  situacao: string = SITUACAO_ALUNO.ESTUDANDO; // estudando, concluido, etc.
  ativo: boolean = true;
  criadoEm: Date = new Date();

  gerarMatricula(): string {
    const ano = new Date().getFullYear();
    const random = Math.floor(Math.random() * 1000)
      .toString()
      .padStart(3, '0');
    return `${ano}${random}`;
  }
}
