import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { resolve } from 'path';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: resolve(__dirname, 'environments', 'local.env'),
  })],
  exports: [ConfigModule]
})
export class CoreModule { }
