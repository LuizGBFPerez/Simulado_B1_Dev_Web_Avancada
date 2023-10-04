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
exports.excluirSecretaria = exports.atualizarSecretaria = exports.obterSecretaria = exports.criarSecretaria = void 0;
const client_1 = require("../prisma/client");
const prisma = new client_1.PrismaClient();
const criarSecretaria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nome, RG } = req.body;
        const secretaria = yield prisma.secretaria.create({
            data: { nome, RG },
        });
        return res.status(201).json(secretaria);
    }
    catch (error) {
        return res.status(500).json({ error: 'Não foi possível criar a secretaria.' });
    }
});
exports.criarSecretaria = criarSecretaria;
const obterSecretaria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const secretariaId = parseInt(req.params.id);
    try {
        const secretaria = yield prisma.secretaria.findUnique({
            where: { id: secretariaId },
        });
        if (!secretaria) {
            return res.status(404).json({ error: 'Secretaria não encontrada.' });
        }
        return res.json(secretaria);
    }
    catch (error) {
        return res.status(500).json({ error: 'Erro ao obter a secretaria.' });
    }
});
exports.obterSecretaria = obterSecretaria;
const atualizarSecretaria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const secretariaId = parseInt(req.params.id);
    const { nome, RG } = req.body;
    try {
        const secretaria = yield prisma.secretaria.update({
            where: { id: secretariaId },
            data: { nome, RG },
        });
        return res.json(secretaria);
    }
    catch (error) {
        return res.status(500).json({ error: 'Erro ao atualizar a secretaria.' });
    }
});
exports.atualizarSecretaria = atualizarSecretaria;
const excluirSecretaria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const secretariaId = parseInt(req.params.id);
    try {
        yield prisma.secretaria.delete({
            where: { id: secretariaId },
        });
        return res.status(204).send();
    }
    catch (error) {
        return res.status(500).json({ error: 'Erro ao excluir a secretaria.' });
    }
});
exports.excluirSecretaria = excluirSecretaria;
