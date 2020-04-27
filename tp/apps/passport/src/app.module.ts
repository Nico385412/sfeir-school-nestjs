import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'school',
    database: 'nestschool',
    autoLoadEntities: true,
    synchronize: true,
  }), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}