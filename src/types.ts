export type Priority = "high" | "medium" | "low";
export type Category = "personal" | "work" | "other";
export type FilterStatus = "all" | "active" | "completed";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  priority: Priority;
  category: Category;
  createdAt: number;
}
