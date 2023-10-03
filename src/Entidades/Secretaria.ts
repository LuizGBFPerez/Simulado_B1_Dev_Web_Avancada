export class Secretaria
{
    nome: string;
    RG: number;
  
    constructor(nome: string, RG: number)
    {
      this.nome = nome;
      this.RG = RG;
    }
  
    cadastrarPaciente(): void
    {
    }
  
    gerarNome(): string
    {
      return '';
    }
  
    gerarSenha(): number
    {
      return 0;
    }
  
    agendarConsulta(): void
    {
    }
  
    emitirRelatorio(): void
    {
    }
  
    conferirAgenda(): void
    {
    }
  
    alterarAgenda(): void
    {
    }
  }
  