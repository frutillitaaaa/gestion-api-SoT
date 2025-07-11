import { Request, Response } from 'express'
import prisma from '../prisma'

export const getHistoriales = async (req: Request, res: Response) => {
    const historiales = await prisma.historial.findMany(); 
    res.json(historiales);
};

export const getHistorialPorUsuario = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        console.log(id);
        const historial = await prisma.historial.findUnique({
            where: { id }
        });
        res.json(historial);
    } catch (e) {
        console.error("Error al obtener historial por usuario: ", e);
    }
    
};

export const crearHistorial = async (req: Request, res: Response) => {
    const historial = await prisma.historial.create({
        data: req.body
    });
    res.json(historial);
};

export const updateHistorial = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { id: _, ...data } = req.body;
    const historialActualizado = await prisma.historial.update({
        where: { id },
        data    
    });
    res.json(historialActualizado);
};

export const deleteHistorial = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const historial = await prisma.historial.delete({
        where: { id }
    });
};