import { useState } from "react";
import type { Todo } from "../types";
import styles from "./TodoItem.module.css";

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, text: string) => void;
}

const PRIORITY_LABEL: Record<string, string> = {
  high: "높음",
  medium: "중간",
  low: "낮음",
};

const CATEGORY_LABEL: Record<string, string> = {
  personal: "개인",
  work: "업무",
  other: "기타",
};

export function TodoItem({ todo, onToggle, onDelete, onUpdate }: Props) {
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim()) {
      onUpdate(todo.id, editText);
    }
    setEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSave();
    if (e.key === "Escape") {
      setEditText(todo.text);
      setEditing(false);
    }
  };

  return (
    <li
      className={`${styles.item} ${todo.completed ? styles.completed : ""}`}
    >
      <div className={styles.main}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        {editing ? (
          <input
            className={styles.editInput}
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleSave}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        ) : (
          <span
            className={styles.text}
            onDoubleClick={() => setEditing(true)}
          >
            {todo.text}
          </span>
        )}
      </div>
      <div className={styles.meta}>
        <span className={`${styles.priority} ${styles[todo.priority]}`}>
          {PRIORITY_LABEL[todo.priority]}
        </span>
        <span className={styles.category}>
          {CATEGORY_LABEL[todo.category]}
        </span>
        <button
          className={styles.deleteButton}
          onClick={() => onDelete(todo.id)}
          aria-label="삭제"
        >
          &times;
        </button>
      </div>
    </li>
  );
}
