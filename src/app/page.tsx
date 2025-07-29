'use client';
import { useEffect, useState } from 'react';
import { Task } from '@/lib/types';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  /*se monta y se optiene las tareas de la api*/
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch('api/tasks');
        if (!res.ok) {
          throw new Error('Error al obtener las tareas');
        }
        const data = await res.json();
        setTasks(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTasks();
  }, []);

  /*POST*/
  const handleAddNewTask = async (taskData: {
    title: string;
    description: string;
  }) => {
    try {
      const res = await fetch('api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(taskData),
      });
      if (!res.ok) throw new Error('Hubo un error al crear la tarea');
      const newTask = await res.json();
      setTasks((prev) => [...prev, newTask]);
    } catch (error) {
      console.error(error);
    }
  };

  /*PUT*/
  const handleTaskComplete = async (id: string) => {
    const update = tasks.find((task) => task.id === id);
    if (!update) return;

    try {
      const res = await fetch(`/api/tasks/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: update.title,
          description: update.description,
          completed: !update.completed,
        }),
      });
      if (!res.ok) throw new Error('Error al actualizar la tarea');
      const updateTask = await res.json();
      setTasks((prev) => prev.map((tas) => (tas.id === id ? updateTask : tas)));
    } catch (error) {
      console.error(error);
    }
  };

  /*DELETE*/
  const handleTaskDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/tasks/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Error al eliminar la tarea');
      setTasks((prev) => prev.filter((tas) => tas.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="container">
      <h1 className="titleMain">Mi Lista de Tareas 📝</h1>
      <TaskForm onAddTask={handleAddNewTask} />
      <TaskList
        tasks={tasks}
        onToggleComplete={handleTaskComplete}
        onDelete={handleTaskDelete}
      />
    </main>
  );
}
