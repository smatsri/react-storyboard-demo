import { createContext, useContext } from 'react';
import { TodoService } from '../types';

export const TodoContext = createContext<TodoService>(null as any)
TodoContext.displayName = "TodoService";
export const useTodoService = () => useContext(TodoContext)
