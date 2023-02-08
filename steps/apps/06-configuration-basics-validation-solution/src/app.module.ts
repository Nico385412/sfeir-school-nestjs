import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { TodosModule } from './feature/todos/todos.module';

@Module({
  imports: [CoreModule, TodosModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
