import React, { createContext, useContext, useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  dueDate: string;
  category: string;
}

interface TodoContextType {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      text: "Complete project presentation",
      completed: false,
      dueDate: "2024-03-20",
      category: "work"
    },
    {
      id: 2,
      text: "Go grocery shopping",
      completed: true,
      dueDate: "2024-03-15",
      category: "shopping"
    },
    {
      id: 3,
      text: "Schedule dentist appointment",
      completed: false,
      dueDate: "2024-03-25",
      category: "health"
    }
  ]);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
};