import { Module } from "@nestjs/common";
import { BetService } from "./bet/bet.service";
import { BetController } from "./bet/bet.controller";
import { BetModule } from "./bet/bet.module";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [
        BetModule,
        ConfigModule.forRoot({
            isGlobal: true,
        }),
    ],
    controllers: [BetController],
    providers: [BetService],
})
export class AppModule {}
