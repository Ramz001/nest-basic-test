import { Controller, Get } from '@nestjs/common';

// todo: implement profile controller methods
// CRUD operations for user profiles + by id with params.

@Controller('profile')
export class ProfileController {
  @Get()
  findAll() {
    return [];
  }
}
