import { Global, Module } from "@nestjs/common";
import { BetService } from "src/bet/bet.service";
import { BetController } from "src/bet/bet.controller";

@Global()
@Module({
    controllers: [BetController],
    providers: [BetService],
})
export class BetModule {}
