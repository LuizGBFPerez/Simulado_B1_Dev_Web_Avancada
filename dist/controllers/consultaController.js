"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.excluirConsulta = exports.atualizarConsulta = exports.obterConsulta = exports.criarConsulta = void 0;
const client_1 = require("../prisma/client");
const prisma = new client_1.PrismaClient();
const criarConsulta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data, nomePaciente, nomeDentista } = req.body;
        const consulta = yield prisma.consulta.create({
            data: { data, nomePaciente, nomeDentista },
        });
        return res.status(201).json(consulta);
    }
    catch (error) {
        return res.status(500).json({ error: 'Não foi possível criar a consulta.' });
    }
});
exports.criarConsulta = criarConsulta;
const obterConsulta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const consultaId = parseInt(req.params.id);
    try {
        const consulta = yield prisma.consulta.findUnique({
            where: { id: consultaId },
        });
        if (!consulta) {
            return res.status(404).json({ error: 'Consulta não encontrada.' });
        }
        return res.json(consulta);
    }
    catch (error) {
        return res.status(500).json({ error: 'Erro ao obter a consulta.' });
    }
});
exports.obterConsulta = obterConsulta;
const atualizarConsulta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const consultaId = parseInt(req.params.id);
    const { data, nomePaciente, nomeDentista } = req.body;
    try {
        const consulta = yield prisma.consulta.update({
            where: { id: consultaId },
            data: { data, nomePaciente, nomeDentista },
        });
        return res.json(consulta);
    }
    catch (error) {
        return res.status(500).json({ error: 'Erro ao atualizar a consulta.' });
    }
});
exports.atualizarConsulta = atualizarConsulta;
const excluirConsulta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const consultaId = parseInt(req.params.id);
    try {
        yield prisma.consulta.delete({
            where: { id: consultaId },
        });
        return res.status(204).send();
    }
    catch (error) {
        return res.status(500).json({ error: 'Erro ao excluir a consulta.' });
    }
});
exports.excluirConsulta = excluirConsulta;
