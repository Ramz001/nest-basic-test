import { Controller, Get, Query, Param } from '@nestjs/common';

// todo: implement profile controller methods
// CRUD operations for user profiles + by id with params.

@Controller('profile')
export class ProfileController {
  @Get()
  findAll(@Query('age') age: number) {
    return [{ age }];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }
}
