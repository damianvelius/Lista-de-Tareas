'use client';

import { useState } from 'react';

interface TaskFormProps {
  onAddTask: (task: { title: string; description: string }) => void;
}

export default function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('El titulo es obligatorio Maestro');
      return;
    }
    if (!description.trim()) {
      alert('La descripcion de tu tarea no puede estar vacia Maestro');
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
