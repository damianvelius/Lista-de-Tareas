'use client';
import { Task } from '@/lib/types';

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskItem({
  task,
  onToggleComplete,
  onDelete,
}: TaskItemProps) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <label className="task-info">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
        />
        <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      </label>
      <button
        type="button"
        onClick={() => onDelete(task.id)}
        className="delete-btn"
      >
        Eliminar
      </button>
    </div>
  );
}
