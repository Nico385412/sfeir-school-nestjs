import { Injectable } from '@nestjs/common';
import { TODOS_LIST } from '../constants/todos-list';
import { Todo } from '../models/todo.model';
import { RessourceNotFoundException } from '../../../shared/exception/not-found.exception';

@Injectable()
export class TodoService {
  getAllTodos(): Array<Todo> {
    return TODOS_LIST;
  }

  createTodo(todo: Omit<Todo, 'id'>): number {
    const idTodo = TODOS_LIST.length + 1;
    TODOS_LIST.push({ ...todo, id: idTodo });
    return idTodo;
  }

  getTodo(idTodo: number): Todo {
    const todo = TODOS_LIST.find(({ id }) => id === idTodo);
    if (!todo) {
      throw new RessourceNotFoundException(idTodo);
    }
    return todo;
  }

  deleteTodo(idTodo: number): void {
    const indexTodo: number = TODOS_LIST.findIndex(({ id }) => id === idTodo);
    if (indexTodo === -1) throw new RessourceNotFoundException(idTodo);
    TODOS_LIST.splice(indexTodo, 1);
  }
}
