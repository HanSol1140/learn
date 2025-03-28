// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { User } from './user/user.entity'; // 예시: User 엔티티를 만들었다면 import

// .env 사용
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 전역 모듈화, 모든경로에서 호출가능
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,       // PostgreSQL 기본 포트
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD, 
      database: process.env.DB_DATABASE,       // 연결할 데이터베이스 이름으로 변경
      // entities: [User],                // 사용할 엔티티 클래스 목록을 배열로 직접 지정
      entities: [__dirname + '/../**/*.entity{.ts,.js}'], // 또는 __dirname을 사용하여 프로젝트 내 모든 .entity 파일 스캔 (권장)
      synchronize: true, // DB 스키마 엔티티 따라 자동변경 => 개발에서만 사용
      // logging: true, // SQL 쿼리로깅
    }),
    UserModule,
    // 다른 모듈들...
    // 예: UserModule, ProductModule 등
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}