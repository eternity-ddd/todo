import type { Todo } from "../types";
import { TodoItem } from "./TodoItem";
import styles from "./TodoList.module.css";

interface Props {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, text: string) => void;
}

export function TodoList({ todos, onToggle, onDelete, onUpdate }: Props) {
  if (todos.length === 0) {
    return <p className={styles.empty}>할 일이 없습니다.</p>;
  }

  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
}
