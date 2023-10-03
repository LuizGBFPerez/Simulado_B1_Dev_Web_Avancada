import { Request, Response } from 'express';
import { PrismaClient } from './prisma/client';

const prisma = new PrismaClient();

export const criarSecretaria = async (req: Request, res: Response) => {
  try {
    const { nomeSecretaria, rg } = req.body;
    const secretaria = await prisma.secretaria.create({
      data: { nomeSecretaria, rg },
    });
    return res.status(201).json(secretaria);
  } catch (error) {
    return res.status(500).json({ error: 'Não foi possível criar a secretaria.' });
  }
};

export const obterSecretaria = async (req: Request, res: Response) => {
  const secretariaId = parseInt(req.params.id);

  try {
    const secretaria = await prisma.secretaria.findUnique({
      where: { id: secretariaId },
    });
    if (!secretaria) {
      return res.status(404).json({ error: 'Secretaria não encontrada.' });
    }
    return res.json(secretaria);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao obter a secretaria.' });
  }
};


export const atualizarSecretaria = async (req: Request, res: Response) => {
  const secretariaId = parseInt(req.params.id);
  const { nomesecretaria, rg } = req.body;

  try {
    const secretaria = await prisma.secretaria.update({
      where: { id: secretariaId },
      data: { nomesecretaria, rg },
    });
    return res.json(secretaria);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao atualizar a secretaria.' });
  }
};


export const excluirSecretaria = async (req: Request, res: Response) => {
  const secretariaId = parseInt(req.params.id);

  try {
    await prisma.secretaria.delete({
      where: { id: secretariaId },
    });
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao excluir a secretaria.' });
  }
};

