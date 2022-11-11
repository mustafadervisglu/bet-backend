import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class BetDto {
    @IsString()
    @IsNotEmpty()
    id: string;
    @IsString()
    @IsNotEmpty()
    bet: string;
    @IsString()
    @IsNotEmpty()
    randomNumber: string;
    @IsString()
    @IsNotEmpty()
    amount: string;
    @IsString()
    @IsNotEmpty()
    player: string;
    @IsDate()
    @IsNotEmpty()
    time: Date;
}
