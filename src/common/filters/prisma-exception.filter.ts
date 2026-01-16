import { Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { Prisma } from 'src/database/prisma/client';
import { Response } from 'express';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    console.error(exception.message);

    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.BAD_REQUEST;
    let message = exception.message.replace(/\n/g, '');

    switch (exception.code) {
      case 'P2002':
        status = HttpStatus.CONFLICT;
        message = `Unique constraint failed on the fields:`;
        break;

      case 'P2025':
        status = HttpStatus.NOT_FOUND;
        message = 'Record not found';
        break;

      case 'P2003':
        status = HttpStatus.CONFLICT;
        message = 'Foreign key constraint failed';
        break;

      default:
        status = HttpStatus.INTERNAL_SERVER_ERROR;
        message = 'Unexpected database error';
    }

    response.status(status).json({
      statusCode: status,
      message,
    });
  }
}
