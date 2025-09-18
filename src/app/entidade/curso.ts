import { HABILIDADE_INGLES } from '../entidade/atividade';
export const NIVEL_TIPO = {
  BASIC: 'basic',
  PRE_INTERMEDIATE: 'pre-intermediate',
  INTERMEDIATE: 'intermediate',
  UPPER_INTERMEDIATE: 'upper-intermediate',
  ADVANCED: 'advanced',
} as const;

export const TIPO_TURMA = {
  KIDS: 'kids',
  TEENS: 'teens',
  ADULTS: 'adults',
} as const;

type HabilidadeIngles =
  (typeof HABILIDADE_INGLES)[keyof typeof HABILIDADE_INGLES];
type NivelTipo = (typeof NIVEL_TIPO)[keyof typeof NIVEL_TIPO];
type TipoTurma = (typeof TIPO_TURMA)[keyof typeof TIPO_TURMA];

export class Curso {
  id: number = 0;
  nome: string = ''; // Basic 1
  tipo: NivelTipo = NIVEL_TIPO.BASIC; // basic, intermediate, advanced
  subnivel: number = 1; // 1, 2, 3
  duracaoMeses: number = 6; // 6 meses
  materialDidatico: string = ''; // Beginner
  tipoTurma: TipoTurma = TIPO_TURMA.ADULTS; // kids, teens, adults
  habilidade: HabilidadeIngles = HABILIDADE_INGLES.GRAMMAR;
  professorId: number = 0;
  ativo: boolean = true;
}
