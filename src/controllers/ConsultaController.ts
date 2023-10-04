import {Request, Response} from 'express';
import {PrismaClient} from '../prisma/client';

const prisma = new PrismaClient();

export const criarConsulta = async (req: Request, res: Response) => {
  try
  {
    const { data, nomePaciente, nomeDentista } = req.body;
    const consulta = await prisma.consulta.create(
      {
      data: { data, nomePaciente, nomeDentista },
      });
    return res.status(201).json(consulta);
  } catch (error)
  {
    return res.status(500).json({error: 'Não foi possível criar a consulta.'});
  }
};

export const obterConsulta = async (req: Request, res: Response) => {
  const consultaId = parseInt(req.params.id);

  try
  {
    const consulta = await prisma.consulta.findUnique(
      {
      where: {id: consultaId},
      });
    if (!consulta)
    {
      return res.status(404).json({error: 'Consulta não encontrada.'});
    }
    return res.json(consulta);
  } catch (error)
  {
    return res.status(500).json({error: 'Erro ao obter a consulta.'});
  }
};


export const atualizarConsulta = async (req: Request, res: Response) => {
  const consultaId = parseInt(req.params.id);
  const {data, nomePaciente, nomeDentista} = req.body;

  try
  {
    const consulta = await prisma.consulta.update(
      {
      where: {id: consultaId},
      data: {data, nomePaciente, nomeDentista},
      });
    return res.json(consulta);
  } catch (error)
  {
    return res.status(500).json({error: 'Erro ao atualizar a consulta.'});
  }
};


export const excluirConsulta = async (req: Request, res: Response) => {
  const consultaId = parseInt(req.params.id);

  try
  {
    await prisma.consulta.delete(
      {
      where: { id: consultaId },
      });
    return res.status(204).send();
  } catch (error)
  {
    return res.status(500).json({error: 'Erro ao excluir a consulta.'});
  }
};

