import type { NextApiRequest, NextApiResponse } from 'next';
import { tasks } from '@/lib/data';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const taskId = id as string;
  const index = tasks.findIndex((task) => task.id === taskId);

  if (index === -1) {
    return res.status(404).json({ error: 'La tarea no fue encontrada' });
  }

  if (req.method === 'PUT') {
    const { title, description, completed } = req.body;

    if (
      typeof title !== 'string' ||
      typeof description !== 'string' ||
      typeof completed !== 'boolean'
    ) {
      return res.status(400).json({
        error:
          'Datos invalidos, el titulo, descripcion y su finalizacion o no, son obligatorias',
      });
    }

    const task = tasks[index];
    task.title = title;
    task.description = description;
    task.completed = completed;

    return res.status(200).json(task);
  }

  if (req.method === 'DELETE') {
    tasks.splice(index, 1);
    return res
      .status(200)
      .json({ message: 'La tarea fue eliminada de su lista' });
  }

  res.setHeader('Allow', ['PUT', 'DELETE']);
  res.status(405).end(`El Método ${req.method} no es permitido en este ambito`);
}
