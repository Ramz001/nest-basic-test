import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { type UpdateProfileDto, ProfileSchema } from './dto/update-profile.dto';
import { ProfileService } from './profile.service';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe';
import { ProfileGuard } from './profile.guard';

@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @Get()
  findAll() {
    return this.profileService.findAll();
  }

  @Get(':id')
  @UseGuards(ProfileGuard)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.profileService.findOne(id);
  }

  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profileService.create(createProfileDto);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ZodValidationPipe(ProfileSchema))
    updateProfileDto: UpdateProfileDto,
  ) {
    return this.profileService.update(id, updateProfileDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.profileService.remove(id);
  }
}
