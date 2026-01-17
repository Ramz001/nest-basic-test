import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import type { Request } from 'express';

@Injectable()
export class ProfileGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    const cookies = request.cookies ?? {};
    console.log('Cookies:', cookies);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const auth = cookies['NEXT_LOCALE'];
    return auth === 'ru';
  }
}
