import { Request, Response } from 'express';
import { PrismaClient } from '../prisma/client';

const prisma = new PrismaClient();

export const criarAgenda = async (req: Request, res: Response) => {
  try {
    const { data, nomePaciente} = req.body;
    const agenda = await prisma.agenda.create({
      data: { data, nomePaciente},
    });
    return res.status(201).json(agenda);
  } catch (error) {
    return res.status(500).json({ error: 'Não foi possível criar a agenda.' });
  }
};

export const obterAgenda = async (req: Request, res: Response) => {
  const agendaId = parseInt(req.params.id);

  try {
    const agenda = await prisma.agenda.findUnique({
      where: { id: agendaId },
    });
    if (!agenda) {
      return res.status(404).json({ error: 'Agenda não encontrada.' });
    }
    return res.json(agenda);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao obter a agenda.' });
  }
};


export const atualizarAgenda = async (req: Request, res: Response) => {
  const agendaId = parseInt(req.params.id);
  const { data, nomePaciente} = req.body;

  try {
    const agenda = await prisma.agenda.update({
      where: { id: agendaId },
      data: { data, nomePaciente},
    });
    return res.json(agenda);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao atualizar a agenda.' });
  }
};


export const excluirAgenda = async (req: Request, res: Response) => {
  const agendaId = parseInt(req.params.id);

  try {
    await prisma.agenda.delete({
      where: { id: agendaId },
    });
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao excluir a agenda.' });
  }
};

