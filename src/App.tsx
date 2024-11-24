import React from 'react';
import { CheckCircle2, Circle, Plus, Calendar, Tag, Trash2 } from 'lucide-react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { TodoProvider } from './context/TodoContext';

function App() {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              TaskFlow
            </h1>
            <p className="text-gray-600">Organize your day, achieve more</p>
          </header>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
            <AddTodo />
          </div>

          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;