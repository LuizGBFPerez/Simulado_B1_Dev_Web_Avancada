export class Paciente
{
    nomePaciente: string;
    senha: number;
    usuario: string;
  
    constructor(nomePaciente: string, senha: number, usuario: string)
    {
      this.nomePaciente = nomePaciente;
      this.senha = senha;
      this.usuario = usuario;
    }
  
    agendarConsulta(): void
    {
    }
  }
  