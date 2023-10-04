import express from 'express';
import bodyParser from 'body-parser';
import {Paciente} from './Entidades/Paciente';
import {Secretaria} from './Entidades/Secretaria';
import {Consulta} from './Entidades/Consulta';
import {Agenda} from './Entidades/Agenda';
import {criarPaciente, obterPaciente, atualizarPaciente, excluirPaciente} from './controllers/PacienteController';
import {criarSecretaria, obterSecretaria, atualizarSecretaria, excluirSecretaria} from './controllers/SecretariaController';
import {criarConsulta, obterConsulta, atualizarConsulta, excluirConsulta} from './controllers/ConsultaController';
import {criarAgenda, obterAgenda, atualizarAgenda, excluirAgenda} from './controllers/AgendaController';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());



const novoPaciente = new Paciente('NomePac', 11111, 'lalilulelo');
novoPaciente.agendarConsulta();

const novaSecretaria = new Secretaria('NomeSec', 1111111);
novaSecretaria.cadastrarPaciente();
const nomeGerado = novaSecretaria.gerarNome();
const senhaGerada = novaSecretaria.gerarSenha();
novaSecretaria.agendarConsulta();
novaSecretaria.emitirRelatorio();
novaSecretaria.conferirAgenda();
novaSecretaria.alterarAgenda();

const novaConsulta = new Consulta(new Date(), 'NomePac', 'NomeDen');
novaConsulta.registrarConsulta;
novaConsulta.consultarAgenda;

const novaAgenda = new Agenda(new Date(), 'NomePac');




app.post('/pacientes', criarPaciente);
app.get('/pacientes/:id', obterPaciente);
app.put('/pacientes/:id', atualizarPaciente);
app.delete('/pacientes/:id', excluirPaciente);

app.post('/secretaria', criarSecretaria);
app.get('/secretaria/:id', obterSecretaria);
app.put('/secretaria/:id', atualizarSecretaria);
app.delete('/secretaria/:id', excluirSecretaria);

app.post('/consulta', criarConsulta);
app.get('/consulta/:id', obterConsulta);
app.put('/consulta/:id', atualizarConsulta);
app.delete('/consulta/:id', excluirConsulta);

app.post('/agenda', criarAgenda);
app.get('/agenda/:id', obterAgenda);
app.put('/agenda/:id', atualizarAgenda);
app.delete('/agenda/:id', excluirAgenda);


app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
