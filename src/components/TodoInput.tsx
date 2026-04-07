import { useState } from "react";
import type { Priority, Category } from "../types";
import styles from "./TodoInput.module.css";

interface Props {
  onAdd: (text: string, priority: Priority, category: Category) => void;
}

const PRIORITY_LABELS: Record<Priority, string> = {
  high: "높음",
  medium: "중간",
  low: "낮음",
};

const CATEGORY_LABELS: Record<Category, string> = {
  personal: "개인",
  work: "업무",
  other: "기타",
};

export function TodoInput({ onAdd }: Props) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState<Priority>("medium");
  const [category, setCategory] = useState<Category>("personal");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text, priority, category);
    setText("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputRow}>
        <input
          className={styles.textInput}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="할 일을 입력하세요..."
        />
        <button className={styles.addButton} type="submit">
          추가
        </button>
      </div>
      <div className={styles.optionRow}>
        <label className={styles.selectLabel}>
          우선순위
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as Priority)}
          >
            {(Object.keys(PRIORITY_LABELS) as Priority[]).map((p) => (
              <option key={p} value={p}>
                {PRIORITY_LABELS[p]}
              </option>
            ))}
          </select>
        </label>
        <label className={styles.selectLabel}>
          카테고리
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as Category)}
          >
            {(Object.keys(CATEGORY_LABELS) as Category[]).map((c) => (
              <option key={c} value={c}>
                {CATEGORY_LABELS[c]}
              </option>
            ))}
          </select>
        </label>
      </div>
    </form>
  );
}
