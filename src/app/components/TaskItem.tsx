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
    <article className={`task-item ${task.completed ? 'completed' : ''}`}>
      <header className="task-head">
        <input
          className="checkbox"
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
        />
        <h3 className="task-title">{task.title}</h3>
      </header>
      {task.description && <p className="task-desc">{task.description}</p>}
      <div className="task-actions">
        <button className="btn btn-delete" onClick={() => onDelete(task.id)}>
          Eliminar
        </button>
      </div>
    </article>
  );
}
