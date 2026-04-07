import type { FilterStatus } from "../types";
import styles from "./TodoFilter.module.css";

interface Props {
  filter: FilterStatus;
  search: string;
  counts: { all: number; active: number; completed: number };
  onFilterChange: (f: FilterStatus) => void;
  onSearchChange: (s: string) => void;
  onClearCompleted: () => void;
}

const FILTER_LABELS: { value: FilterStatus; label: string }[] = [
  { value: "all", label: "전체" },
  { value: "active", label: "활성" },
  { value: "completed", label: "완료" },
];

export function TodoFilter({
  filter,
  search,
  counts,
  onFilterChange,
  onSearchChange,
  onClearCompleted,
}: Props) {
  return (
    <div className={styles.container}>
      <input
        className={styles.search}
        type="text"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="검색..."
      />
      <div className={styles.row}>
        <div className={styles.tabs}>
          {FILTER_LABELS.map(({ value, label }) => (
            <button
              key={value}
              className={`${styles.tab} ${filter === value ? styles.active : ""}`}
              onClick={() => onFilterChange(value)}
            >
              {label}
              <span className={styles.count}>{counts[value]}</span>
            </button>
          ))}
        </div>
        {counts.completed > 0 && (
          <button className={styles.clearButton} onClick={onClearCompleted}>
            완료 항목 삭제
          </button>
        )}
      </div>
    </div>
  );
}
