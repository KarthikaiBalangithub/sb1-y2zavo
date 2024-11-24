import React from 'react';
import { CheckCircle2, Circle, Calendar, Tag, Trash2 } from 'lucide-react';
import { useTodoContext } from '../context/TodoContext';

const TodoList = () => {
  const { todos, toggleTodo, deleteTodo } = useTodoContext();

  const categories = {
    work: 'bg-blue-100 text-blue-800',
    personal: 'bg-green-100 text-green-800',
    shopping: 'bg-yellow-100 text-yellow-800',
    health: 'bg-red-100 text-red-800',
  };

  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`bg-white rounded-xl shadow-sm p-4 flex items-center gap-4 transition-all duration-200 ${
            todo.completed ? 'opacity-75' : ''
          }`}
        >
          <button
            onClick={() => toggleTodo(todo.id)}
            className="text-gray-500 hover:text-indigo-600 transition-colors"
          >
            {todo.completed ? (
              <CheckCircle2 className="w-6 h-6 text-indigo-600" />
            ) : (
              <Circle className="w-6 h-6" />
            )}
          </button>

          <div className="flex-1">
            <p
              className={`text-gray-800 text-lg ${
                todo.completed ? 'line-through text-gray-400' : ''
              }`}
            >
              {todo.text}
            </p>
            <div className="flex gap-3 mt-2">
              <span className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                {todo.dueDate}
              </span>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  categories[todo.category as keyof typeof categories]
                }`}
              >
                <Tag className="w-3 h-3 inline mr-1" />
                {todo.category}
              </span>
            </div>
          </div>

          <button
            onClick={() => deleteTodo(todo.id)}
            className="text-gray-400 hover:text-red-600 transition-colors"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;