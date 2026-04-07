import { useTodos } from "./hooks/useTodos";
import { useTheme } from "./hooks/useTheme";
import { TodoInput } from "./components/TodoInput";
import { TodoFilter } from "./components/TodoFilter";
import { TodoList } from "./components/TodoList";
import styles from "./App.module.css";

export default function App() {
  const {
    todos,
    counts,
    filter,
    search,
    setFilter,
    setSearch,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodo,
    clearCompleted,
  } = useTodos();

  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>TODO</h1>
        <button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label="테마 전환"
        >
          {theme === "light" ? "\u{1F319}" : "\u{2600}\u{FE0F}"}
        </button>
      </header>
      <TodoInput onAdd={addTodo} />
      <TodoFilter
        filter={filter}
        search={search}
        counts={counts}
        onFilterChange={setFilter}
        onSearchChange={setSearch}
        onClearCompleted={clearCompleted}
      />
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onUpdate={updateTodo}
      />
    </div>
  );
}
