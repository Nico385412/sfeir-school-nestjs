import { Controller, Delete, Get, HttpCode, Param } from '@nestjs/common';
import { AppService } from './app-service/app-service';
import { TODOS_LIST } from './shared/constants/todos-list';
import { Todo } from './shared/models/todo.model';

@Controller('/api/todos')
export class AppController {

  constructor(private readonly service: AppService) { }

  @Get()
  @HttpCode(200)
  getAllTodos(): Array<Todo> {
    return this.service.getAllTodos()
  }

  @Get(':id')
  @HttpCode(200)
  getTodo(@Param('id') idTodo: string): Todo {
    return this.service.getTodo(+idTodo)
  }

  @Delete(':id')
  @HttpCode(200)
  removeTodo(@Param('id') idTodo: string): void {
    this.service.removeTodo(+idTodo)
  }
}
