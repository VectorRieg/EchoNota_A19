export const TIPO_ATIVIDADE = {
  UNIT_TEST: 'unit-test',
  LISTENING_TEST: 'listening-test',
  SPEAKING_TEST: 'speaking-test',
  WRITING_TEST: 'writing-test',
  FINAL_EXAM: 'final-exam',
} as const;

export const HABILIDADE_INGLES = {
  LISTENING: 'listening',
  SPEAKING: 'speaking',
  WRITING: 'writing',
  GRAMMAR: 'grammar',
} as const;

type HabilidadeIngles =
  (typeof HABILIDADE_INGLES)[keyof typeof HABILIDADE_INGLES];
type TipoAtividade = (typeof TIPO_ATIVIDADE)[keyof typeof TIPO_ATIVIDADE];

export class Atividade {
  id: number = 0;
  titulo: string = ''; // Nome
  descricao: string = '';
  tipoAtividade: TipoAtividade = TIPO_ATIVIDADE.UNIT_TEST;
  habilidade: HabilidadeIngles = HABILIDADE_INGLES.GRAMMAR;
  cursoId: number = 0;
  professorId: number = 0;
  valorMaximo: number = 10; // 10.0
  dataInicio: Date = new Date();
  dataFim: Date = new Date();
  ativo: boolean = true;
}
