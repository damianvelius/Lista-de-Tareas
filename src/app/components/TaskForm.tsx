'use client';

import { useState } from 'react';
import { z } from 'zod';

const taskScheme = z.object({
  title: z.string().min(1, 'El titulo es obligatorio Maestro'),
  description: z.string().min(1, 'La tarea requiere una minima descripción'),
});

interface TaskFormProps {
  onAddTask: (task: { title: string; description: string }) => void;
}

export default function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = taskScheme.safeParse({ title, description });
    if (!result.success) {
      const firstError = result.error.issues[0]?.message;
      setError(firstError || 'Error desconocido');
      return;
    }
    onAddTask({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Título de la Tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Descripción de su Tarea"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">(+)</button>
    </form>
  );
}
