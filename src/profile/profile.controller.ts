import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';

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

  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return {
      name: createProfileDto.name,
      description: createProfileDto.description,
    };
  }
}
