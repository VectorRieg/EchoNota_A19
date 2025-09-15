export class Professor {
  id: number = 0;
  usuarioId: number = 0;
  codigo: string = ''; // "PROF001"
  especialidade: string = ''; // "Business English", "Kids", etc.
  nativo: boolean = false; // Se é nativo da língua
  certificacoes: string = ''; // "TESOL, CELTA" (string simples)
  experienciaAnos: number = 0; // Anos de experiência
  ativo: boolean = true;
  criadoEm: Date = new Date();
}
