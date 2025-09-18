import { NIVEL_TIPO } from '../entidade/curso';
export const SITUACAO_ALUNO = {
  // eu vi que const é melhor que enum 👍
  ESTUDANDO: 'estudando',
  CONCLUIDO: 'concluido',
  TRANCADO: 'trancado',
  DESISTENCIA: 'desistencia',
} as const;

type NivelTipo = (typeof NIVEL_TIPO)[keyof typeof NIVEL_TIPO];
type SituacaoAluno = (typeof SITUACAO_ALUNO)[keyof typeof SITUACAO_ALUNO]; // Faz com que ao apenas o que está dentro da const seja aceito

export class Aluno {
  id: number = 0;
  usuarioId: number = 0;
  matricula: number = 0; // Numero aleatorio
  tipo: NivelTipo = NIVEL_TIPO.BASIC;
  situacao: SituacaoAluno = SITUACAO_ALUNO.ESTUDANDO; // Estudando, concluido

  gerarMatricula(): number {
    //Gera uma matricula com um numero aleatorio de 6 digitos
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    const min = 100000;
    const max = 999999;
    const random = array[0] % (max - min + 1);
    return min + random;
  }
}
