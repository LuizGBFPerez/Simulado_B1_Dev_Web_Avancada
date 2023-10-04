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
exports.excluirAgenda = exports.atualizarAgenda = exports.obterAgenda = exports.criarAgenda = void 0;
const client_1 = require("../prisma/client");
const prisma = new client_1.PrismaClient();
const criarAgenda = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data, nomePaciente } = req.body;
        const agenda = yield prisma.agenda.create({
            data: { data, nomePaciente },
        });
        return res.status(201).json(agenda);
    }
    catch (error) {
        return res.status(500).json({ error: 'Não foi possível criar a agenda.' });
    }
});
exports.criarAgenda = criarAgenda;
const obterAgenda = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const agendaId = parseInt(req.params.id);
    try {
        const agenda = yield prisma.agenda.findUnique({
            where: { id: agendaId },
        });
        if (!agenda) {
            return res.status(404).json({ error: 'Agenda não encontrada.' });
        }
        return res.json(agenda);
    }
    catch (error) {
        return res.status(500).json({ error: 'Erro ao obter a agenda.' });
    }
});
exports.obterAgenda = obterAgenda;
const atualizarAgenda = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const agendaId = parseInt(req.params.id);
    const { data, nomePaciente } = req.body;
    try {
        const agenda = yield prisma.agenda.update({
            where: { id: agendaId },
            data: { data, nomePaciente },
        });
        return res.json(agenda);
    }
    catch (error) {
        return res.status(500).json({ error: 'Erro ao atualizar a agenda.' });
    }
});
exports.atualizarAgenda = atualizarAgenda;
const excluirAgenda = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const agendaId = parseInt(req.params.id);
    try {
        yield prisma.agenda.delete({
            where: { id: agendaId },
        });
        return res.status(204).send();
    }
    catch (error) {
        return res.status(500).json({ error: 'Erro ao excluir a agenda.' });
    }
});
exports.excluirAgenda = excluirAgenda;
