import { Module } from "@nestjs/common";
import { BetService } from "src/bet/bet.service";
import { BetController } from "src/bet/bet.controller";
import { BetEntity } from "src/bet/bet-entity/bet.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([BetEntity])],
    controllers: [BetController],
    providers: [BetService],
})
export class BetModule {}
