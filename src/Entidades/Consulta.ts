export class Consulta
{
    data: Date;
    nomePaciente: String;
    NomeDentista: String;

    constructor(data: Date, nomePaciente: String, NomeDentista: String)
    {
        this.data = data;
        this.nomePaciente = nomePaciente;
        this.NomeDentista = NomeDentista;
    }

    registrarConsulta(): void
    {
    }

    consultarAgenda(): void
    {
    }
}