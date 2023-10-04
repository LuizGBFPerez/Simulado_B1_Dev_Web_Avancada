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
exports.excluirPaciente = exports.atualizarPaciente = exports.obterPaciente = exports.criarPaciente = void 0;
const client_1 = require("../prisma/client");
const prisma = new client_1.PrismaClient();
const criarPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nomePaciente, senha, usuario } = req.body;
        const paciente = yield prisma.paciente.create({
            data: { nomePaciente, senha, usuario },
        });
        return res.status(201).json(paciente);
    }
    catch (error) {
        return res.status(500).json({ error: 'Não foi possível criar o paciente.' });
    }
});
exports.criarPaciente = criarPaciente;
const obterPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pacienteId = parseInt(req.params.id);
    try {
        const paciente = yield prisma.paciente.findUnique({
            where: { id: pacienteId },
        });
        if (!paciente) {
            return res.status(404).json({ error: 'Paciente não encontrado.' });
        }
        return res.json(paciente);
    }
    catch (error) {
        return res.status(500).json({ error: 'Erro ao obter o paciente.' });
    }
});
exports.obterPaciente = obterPaciente;
const atualizarPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pacienteId = parseInt(req.params.id);
    const { nomePaciente, senha, usuario } = req.body;
    try {
        const paciente = yield prisma.paciente.update({
            where: { id: pacienteId },
            data: { nomePaciente, senha, usuario },
        });
        return res.json(paciente);
    }
    catch (error) {
        return res.status(500).json({ error: 'Erro ao atualizar o paciente.' });
    }
});
exports.atualizarPaciente = atualizarPaciente;
const excluirPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pacienteId = parseInt(req.params.id);
    try {
        yield prisma.paciente.delete({
            where: { id: pacienteId },
        });
        return res.status(204).send();
    }
    catch (error) {
        return res.status(500).json({ error: 'Erro ao excluir o paciente.' });
    }
});
exports.excluirPaciente = excluirPaciente;
