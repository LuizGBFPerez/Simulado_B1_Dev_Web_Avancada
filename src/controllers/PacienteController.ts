import {Request, Response} from 'express';
import {PrismaClient} from '../prisma/client';

const prisma = new PrismaClient();

export const criarPaciente = async (req: Request, res: Response) => {
  try
  {
    const {nomePaciente, senha, usuario} = req.body;
    const paciente = await prisma.paciente.create(
      {
      data: {nomePaciente, senha, usuario},
      });
    return res.status(201).json(paciente);
  } catch (error)
  {
    return res.status(500).json({error: 'Não foi possível criar o paciente.'});
  }
};

export const obterPaciente = async (req: Request, res: Response) => {
  const pacienteId = parseInt(req.params.id);

  try
  {
    const paciente = await prisma.paciente.findUnique(
      {
      where: {id: pacienteId},
      });
    if (!paciente)
    {
      return res.status(404).json({error: 'Paciente não encontrado.'});
    }
    return res.json(paciente);
  } catch (error)
  {
    return res.status(500).json({error: 'Erro ao obter o paciente.'});
  }
};


export const atualizarPaciente = async (req: Request, res: Response) => {
  const pacienteId = parseInt(req.params.id);
  const {nomePaciente, senha, usuario} = req.body;

  try
  {
    const paciente = await prisma.paciente.update(
      {
      where: {id: pacienteId},
      data: {nomePaciente, senha, usuario},
      });
    return res.json(paciente);
  } catch (error)
  {
    return res.status(500).json({error: 'Erro ao atualizar o paciente.'});
  }
};


export const excluirPaciente = async (req: Request, res: Response) => {
  const pacienteId = parseInt(req.params.id);

  try
  {
    await prisma.paciente.delete(
      {
      where: { id: pacienteId },
      });
    return res.status(204).send();
  } catch (error)
  {
    return res.status(500).json({error: 'Erro ao excluir o paciente.'});
  }
};

