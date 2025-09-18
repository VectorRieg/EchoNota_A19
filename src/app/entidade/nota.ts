import { HABILIDADE_INGLES } from '../entidade/atividade';

type HabilidadeIngles =
  (typeof HABILIDADE_INGLES)[keyof typeof HABILIDADE_INGLES];

export class Nota {
  id: number = 0;
  valor: number = 0; // 0 a 10
  alunoId: number = 0;
  atividadeId: number = 0;
  professorId: number = 0; // Quem lançou a nota
  habilidade: HabilidadeIngles = HABILIDADE_INGLES.GRAMMAR;
  finalizada: boolean = false; // Se a Nota foi finalizada

  aprovado(): boolean {
    return this.valor >= 7.0;
  }

  // Calcula o percentual
  getPercentual(): number {
    return (this.valor / 10) * 100;
  }
}
