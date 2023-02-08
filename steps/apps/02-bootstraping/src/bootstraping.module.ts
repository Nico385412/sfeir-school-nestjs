import { Module } from '@nestjs/common';
import { BootstrapingController } from './bootstraping.controller';
import { BootstrapingService } from './bootstraping.service';

@Module({
  imports: [],
  controllers: [BootstrapingController],
  providers: [BootstrapingService],
})
export class BootstrapingModule { }
