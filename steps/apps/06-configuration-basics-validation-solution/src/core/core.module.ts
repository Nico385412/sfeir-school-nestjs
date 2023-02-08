import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { resolve } from 'path';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: resolve(__dirname, 'environments', 'local.env'),
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
      }),
    }),
  ],
  exports: [ConfigModule],
})
export class CoreModule { }
