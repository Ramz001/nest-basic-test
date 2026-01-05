import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import type { UpdateProfileDto } from './dto/update-profile.dto';

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

  @Put(':id')
  updateOne(
    @Param('id') id: string,
    @Body() updateProfileDto: UpdateProfileDto,
  ) {
    return {
      ...updateProfileDto,
      id,
    };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return { id };
  }
}
