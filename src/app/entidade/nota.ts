export class Nota {
  id: number = 0;
  valor: number = 0; // 0 a 10
  comentario: string = ''; // Feedback do professor
  alunoId: number = 0;
  atividadeId: number = 0;
  professorId: number = 0; // Quem lançou a nota
  habilidade: string = 'reading'; // Qual habilidade foi avaliada
  dataAvaliacao: Date = new Date();
  finalizada: boolean = false; // Se a correção está concluída
  criadoEm: Date = new Date();

  aprovado(): boolean {
    return this.valor >= 7.0;
  }

  // Calcula o percentual
  getPercentual(): number {
    return (this.valor / 10) * 100;
  }
}
