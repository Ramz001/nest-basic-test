import 'dotenv/config';
import { Injectable } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from './prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    const connectionString = process.env.DATABASE_URL as string;
    if (!connectionString) {
      throw new Error('DATABASE_URL is not defined in environment variables');
    }
    const adapter = new PrismaPg({
      connectionString,
    });
    super({ adapter });
  }
}
