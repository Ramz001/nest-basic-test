import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import type { CreateProfileDto } from './dto/create-profile.dto';
import type { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.profile.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.profile.findUnique({ where: { id } });
  }

  async create(data: CreateProfileDto) {
    return await this.prisma.profile.create({ data });
  }

  async update(id: number, data: UpdateProfileDto) {
    return await this.prisma.profile.update({ where: { id }, data });
  }

  async remove(id: number) {
    return await this.prisma.profile.delete({ where: { id } });
  }
}
