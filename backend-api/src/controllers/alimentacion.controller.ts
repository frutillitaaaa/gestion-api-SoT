import { Request, Response } from 'express'
import prisma from '../prisma'
import { markAsUntransferable } from 'worker_threads';

//obtener alimentaciones para cada usuario
export const getAlimentaciones = async (req: Request, res: Response):Promise<void> => {
    try {
        const userId = Number(req.params.id);
        if (isNaN(userId)) {
            res.status(400).json({ error: 'El ID de usuario no es válido' });
            return;
        }

        const alimentaciones = await prisma.alimentacion.findMany({
            where: { 
                id_usuario: userId
            }
        }); 
        res.json(alimentaciones);

    } catch (error) {
        console.error('Error al obtener alimentaciones:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

//crear horario de alimentación para cada usuario
export const createAlimentacion = async (req: Request, res: Response) => {
    try {
        const userId = Number(req.params.id);
        console.log(userId);
    if (isNaN(userId)) {
        res.status(400).json({ error: 'El ID de usuario no es válido' });
        return;
    }
    const alimentacion = await prisma.alimentacion.create({ 
        data: {
            Usuario: {
                connect: {
                    id: userId
                }
            },
            ...req.body
        }
    });
    res.status(201).json(alimentacion);
    } catch(e) {
        console.error("Error al crear alimentacion: ", e);
    }
    
}

export const updateAlimentacion = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        res.status(400).json({ error: 'El ID de alimentación no es válido' });
        return;
    }
    const  data  = req.body;
    const alimentacion = await prisma.alimentacion.update({
       where: {
        id
       }, 
       data
    })
    res.status(201).json(alimentacion);
};

export const deleteAlimentacion = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        res.status(400).json({ error: 'El ID de alimentación no es válido' });
        return;
    }
    const  data  = req.body;
    const alimentacion = await prisma.alimentacion.delete({
       where: {
        id
       }, 
    })
    res.status(201).json(alimentacion);
};