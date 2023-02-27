import { Controller, Delete, Get, Param } from "@nestjs/common";
import { TODOS_LIST } from "./shared/constants/todos-list";

@Controller()
export class TodoController{
    
    @Get('api/todos')
    getTodos() {
        return TODOS_LIST;
    }

    @Get('api/todos/:id')
    getTodo(@Param('id') itemId: number) {
        return TODOS_LIST.find(({id}) => id === itemId)
    }

    @Delete('api/todo/:id')
    deleteTodo(@Param('id') itemId: number) {
        const todoIndex = TODOS_LIST.findIndex(({id}) => id === itemId)
        TODOS_LIST.splice(todoIndex, 1)
    }
}