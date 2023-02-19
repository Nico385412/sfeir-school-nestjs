import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { RessourceNotFoundException } from './not-found.exception';

@Catch(RessourceNotFoundException)
export class RessourceNotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): Response {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const request = context.getRequest<Request>();

    return response.status(exception.getStatus()).json({
      ...exception,
      time: new Date(),
      endpoint: request.url,
    });
  }
}
