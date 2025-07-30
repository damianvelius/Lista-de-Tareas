'use client';

import { Task } from '@/lib/types';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskList({
  tasks,
  onToggleComplete,
  onDelete,
}: TaskListProps) {
  if (tasks.length === 0) {
    return <p>No hay tareas, porque no agregas una picaron</p>;
  }

  return (
    <section className="task-grid">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))}
    </section>
  );
}
