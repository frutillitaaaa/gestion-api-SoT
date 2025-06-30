import { RequestHandler } from 'express';
import prisma from '../prisma';
import bcrypt from 'bcryptjs';


export const loginHandler: RequestHandler = async (req, res) => {
    const correo = req.body.correo?.trim();
    const password  = req.body.password?.trim();
    console.log("correo:", correo, " password:", password);
    const usuario = await prisma.usuario.findUnique({where: { correo }});

    if (!usuario || !(await bcrypt.compare(password, usuario.password))) {
        res.status(401).json({ mensaje: 'Credenciales incorrectas' });
        return;
    }

    res.status(201).json({ nombre: usuario.nombre, correo: usuario.correo, id: usuario.id });
};

export const registroHandler: RequestHandler = async (req, res) => {
    const { nombre, correo, password } = req.body;
    
    const usuarioExistente = await prisma.usuario.findUnique({ where: { correo } });

    if (usuarioExistente) {
        res.status(400).json({ mensaje: 'El correo ya está registrado' });
        return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const nuevoUsuario = await prisma.usuario.create({
        data: {
            nombre,
            correo,
            password: hashedPassword,
        },
    });

    res.status(201).json({
        id: nuevoUsuario.id,
        nombre: nuevoUsuario.nombre,
        correo: nuevoUsuario.correo,
    });
};