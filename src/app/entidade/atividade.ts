const TIPO_ATIVIDADE = {
  UNIT_TEST: 'unit-test',
  LISTENING_TEST: 'listening-test',
  SPEAKING_TEST: 'speaking-test',
  READING_TEST: 'reading-test',
  WRITING_TEST: 'writing-test',
  FINAL_EXAM: 'final-exam',
} as const;

const HABILIDADE_INGLES = {
  LISTENING: 'listening',
  SPEAKING: 'speaking',
  READING: 'reading',
  WRITING: 'writing',
  GRAMMAR: 'grammar',
} as const;

export class Atividade {
  id: number = 0;
  titulo: string = ''; // "Unit 1 - Present Simple Test"
  descricao: string = '';
  tipo: string = TIPO_ATIVIDADE.UNIT_TEST; // listening-test, speaking-test, etc.
  habilidade: string = HABILIDADE_INGLES.READING; // listening, speaking, reading, writing
  cursoId: number = 0;
  professorId: number = 0;
  valorMaximo: number = 10; // 10.0
  dataInicio: Date = new Date();
  dataFim: Date = new Date();
  ativo: boolean = true;
  criadoEm: Date = new Date();
}
