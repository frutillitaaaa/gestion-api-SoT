import { Request, Response } from 'express'
import prisma from '../prisma'

export const getUsuarios = async (req: Request, res: Response) => {
    const usuarios = await prisma.usuario.findMany(); 
    res.json(usuarios);
};

export const getUsuarioById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const usuario = await prisma.usuario.findUnique({
        where: { id }
    });
    res.json(usuario);
};

export const createUsuario = async (req: Request, res: Response) => {
    const usuarioNuevo = await prisma.usuario.create({ data: req.body });
    res.status(201).json(usuarioNuevo);
};

export const deleteUsuario = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await prisma.usuario.delete({ where: { id }});
    res.sendStatus(204);
};

export const updateUsuario = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { id: _, ...data } = req.body;
    const usuarioActualizado =  await prisma.usuario.update({
        where: { id },
        data     
    });
    res.json(usuarioActualizado);
};