import { Body, Controller, Delete, Get, HttpCode, NotAcceptableException, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Todo } from './models/todo.model';
import { TodoService } from './providers/todo.service';
import { TodoDto } from './dto/todo.dto';

@Controller('/api/todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  @HttpCode(200)
  getAllTodos(): Array<Todo> {
    return this.todoService.getAllTodos();
  }

  @Post()
  @HttpCode(201)
  createTodo(@Body() todo: TodoDto): number | NotAcceptableException {
    return this.todoService.createTodo(todo);
  }

  @Get(':id')
  @HttpCode(200)
  getTodo(@Param('id', ParseIntPipe) idTodo: number): Todo {
    return this.todoService.getTodo(idTodo) as Todo;
  }

  @Delete(':id')
  @HttpCode(200)
  removeTodo(@Param('id', ParseIntPipe) idTodo: number): void {
    this.todoService.deleteTodo(idTodo);
    return;
  }
}
