import { Module } from '@nestjs/common';
import { ProfileModule } from './modules/profile/profile.module';

@Module({
  imports: [ProfileModule],
})
export class AppModule {}
