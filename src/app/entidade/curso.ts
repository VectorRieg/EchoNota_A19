const NIVEL_TIPO = {
  BASIC: 'basic',
  PRE_INTERMEDIATE: 'pre-intermediate',
  INTERMEDIATE: 'intermediate',
  UPPER_INTERMEDIATE: 'upper-intermediate',
  ADVANCED: 'advanced',
} as const;

const TIPO_TURMA = {
  KIDS: 'kids',
  TEENS: 'teens',
  ADULTS: 'adults',
} as const;

export class Curso {
  id: number = 0;
  nome: string = ''; // "Basic 1", "Intermediate 2"
  tipo: string = NIVEL_TIPO.BASIC; // basic, intermediate, advanced
  subnivel: number = 1; // 1, 2, 3
  duracaoMeses: number = 6; // 6 meses padrão
  materialDidatico: string = ''; // "New English File Beginner"
  tipoTurma: string = TIPO_TURMA.ADULTS; // kids, teens, adults
  professorId: number = 0;
  ativo: boolean = true;
  criadoEm: Date = new Date();
}
