import { Test, TestingModule } from '@nestjs/testing';
import { RessourceNotFoundException } from '../../../shared/exception/not-found.exception';
import { TodoService } from './todo.service';
import { TODOS_LIST } from '../constants/todos-list';

describe('Todo', () => {
  let provider: TodoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoService],
    }).compile();

    provider = module.get<TodoService>(TodoService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });

  it('should return the list of todos', () => {
    const todos = provider.getAllTodos();
    expect(todos).toEqual(TODOS_LIST);
  });

  it('should return the todos with the id 1', () => {
    const todo = TODOS_LIST.find(({ id }) => id === 1);
    expect(provider.getTodo(1)).toEqual(todo);
  });

  it('should return an error for an id which is not exist', () => {
    expect(() => provider.getTodo(10000)).toThrowError(new RessourceNotFoundException(10000));
  });

  it('should delete a todo with the id 1', () => {
    const initialLengthTodos: number = TODOS_LIST.length;
    provider.deleteTodo(1);
    expect(TODOS_LIST.length).toEqual(initialLengthTodos - 1);
  });

  it('should return an error if id is not exist', () => {
    expect(() => provider.getTodo(10000)).toThrowError(new RessourceNotFoundException(10000));
  });
});
