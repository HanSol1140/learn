"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const fs = require("fs");
async function bootstrap() {
    const httpsOptions = {
        key: fs.readFileSync("./https/private.key.pem"),
        cert: fs.readFileSync("./https/domain.cert.pem")
    };
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { httpsOptions });
    await app.listen(443);
}
bootstrap();
//# sourceMappingURL=main.js.map