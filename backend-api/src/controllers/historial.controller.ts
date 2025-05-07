import { Request, Response } from 'express'
import prisma from '../prisma'

export const getHistoriales = async (req: Request, res: Response) => {
    const historiales = await prisma.historial.findMany(); 
    res.json(historiales);
}