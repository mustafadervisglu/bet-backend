import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { BetService } from "src/bet/bet.service";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(
        new ValidationPipe({ whitelist: true, transform: true })
    );
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
