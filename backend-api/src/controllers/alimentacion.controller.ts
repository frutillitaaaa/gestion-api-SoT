import { Request, Response } from 'express'
import prisma from '../prisma'

export const getAlimentaciones = async (req: Request, res: Response) => {
    const alimentaciones = await prisma.alimentaciones.findMany(); 
    res.json(alimentaciones);
}