import { Request, Response } from 'express'
import prisma from '../prisma'
import { markAsUntransferable } from 'worker_threads';

//obtener alimentaciones para cada usuario
export const getAlimentaciones = async (req: Request, res: Response):Promise<void> => {
    try {
        const id_usuario = Number(req.params.id_usuario);
    if (isNaN(id_usuario)) {
      res.status(400).json({ error: 'ID de usuario no válido' });
      return;
    }

        const alimentaciones = await prisma.alimentacion.findMany({
            where: { 
                id_usuario: id_usuario
            }
        }); 
        res.json(alimentaciones);

    } catch (error) {
        console.error('Error al obtener alimentaciones:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

//crear horario de alimentación para cada usuario
export const createAlimentacion = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id_usuario = Number(req.params.id_usuario);
    if (isNaN(id_usuario)) {
      res.status(400).json({ error: 'ID de usuario no válido' });
      return;
    }

    const { numero_comida, hora, cantidad_comida } = req.body;

    const alimentacion = await prisma.alimentacion.upsert({
      where: {
        id_usuario_numero_comida: {
          id_usuario,
          numero_comida
        }
      },
      update: {
        hora,
        cantidad_comida
      },
      create: {
        id_usuario,
        numero_comida,
        hora,
        cantidad_comida
      }
    });

    res.status(201).json(alimentacion); 
  } catch (e) {
    console.error("Error al crear/actualizar alimentación:", e);
    res.status(500).json({ error: "Error interno" }); 
  }
};


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