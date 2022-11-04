import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { BetService } from "src/bet/bet.service";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const mode = process.env.MODE;

    switch (mode) {
        case "LISTEN_EVENTS": {
            const service = app.get(BetService);
            console.log(service.fetchEventContract());
            break;
        }
        default: {
            await app.listen(3000);
        }
    }
}

bootstrap();
