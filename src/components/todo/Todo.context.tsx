import { createContext, useContext } from 'react';
import { TodoService } from './types';

export const TodoContext = createContext<TodoService>(null as any)
TodoContext.displayName = "ApiService";
export const useTodoService = () => useContext(TodoContext)
