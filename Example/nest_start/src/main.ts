import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';

async function bootstrap() {
  // https 인증서
  const httpsOptions = {
    key: fs.readFileSync("./https/private.key.pem"),
    cert: fs.readFileSync("./https/domain.cert.pem")
  };
  const app = await NestFactory.create(AppModule, { httpsOptions });
  await app.listen(443); // 포트 443에서 실행
  // https://nanonix.help => 접속테스트시 https 제대로 붙엇는지 확인

  // postgres에 연결은 app.modules.ts에서
  // npm install @nestjs/typeorm typeorm pg
}
bootstrap();
