import { Controller, Delete, Get, HttpCode, Param, ParseIntPipe } from '@nestjs/common';
import { Todo } from './models/todo.model';
import { TodoService } from './providers/todo.service';

@Controller('/api/todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  @HttpCode(200)
  getAllTodos(): Array<Todo> {
    return this.todoService.getAllTodos();
  }

  @Get(':id')
  @HttpCode(200)
  getTodo(@Param('id', ParseIntPipe) idTodo: number): Todo {
    return this.todoService.getTodo(idTodo);
  }

  @Delete(':id')
  @HttpCode(200)
  removeTodo(@Param('id', ParseIntPipe) idTodo: number): void {
    this.todoService.deleteTodo(idTodo);
    return;
  }
}
