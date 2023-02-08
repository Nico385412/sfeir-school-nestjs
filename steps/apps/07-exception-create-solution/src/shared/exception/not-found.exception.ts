import { HttpException, HttpStatus } from '@nestjs/common';

export class RessourceNotFoundException<T> extends HttpException {
  constructor(ressource: T) {
    super(`Ressource ${ressource} seems not exist`, HttpStatus.NOT_FOUND);
  }
}
