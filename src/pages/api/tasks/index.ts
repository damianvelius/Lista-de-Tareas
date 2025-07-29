import type { NextApiRequest, NextApiResponse } from 'next';
/*Esto importa los tipos para las funciones API de Next.js.*/
import { tasks } from '@/lib/data';
import { Task } from '@/lib/types';
import { v4 as uuidv4 } from 'uuid';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(tasks);
  } else if (req.method === 'POST') {
    //Crear tarea
    const { title, description } = req.body;

    if (!title || !description) {
      return res
        .status(400)
        .json({ error: 'Falta el titulo o la descripcion' });
    }

    const newTask: Task = {
      id: uuidv4(),
      title,
      description,
      completed: false,
      createdAt: new Date(),
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
  } else {
    /*setHeader que metodos estan permitidos */
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Método ${req.method} no permitido`);
  }
}
