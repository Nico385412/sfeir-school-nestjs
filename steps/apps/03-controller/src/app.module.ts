import { Module } from '@nestjs/common';
import { TodoController } from 'apps/05-module-architecture-solution/src/feature/todos/todo.controller';

@Module({
  imports: [],
  controllers: [TodoController]
})
export class AppModule {}
