import { Injectable } from "@nestjs/common";
import Web3 from "web3";
import betAbi from "./abi/bet-abi.json";
import { AbiItem } from "web3-utils";
import { ConfigService } from "@nestjs/config";
import { InjectRepository } from "@nestjs/typeorm";
import { BetEntity } from "src/bet/bet-entity/bet.entity";
import { Repository } from "typeorm";

@Injectable()
export class BetService {
    private web3: Web3;

    constructor(
        @InjectRepository(BetEntity)
        private betRepository: Repository<BetEntity>,
        private configService: ConfigService
    ) {
        this.web3 = new Web3(
            new Web3.providers.WebsocketProvider(
                this.configService.get<string>("GOERLI")
            )
        );
    }

    async fetchEventContract() {
        const contractAddress =
            this.configService.get<string>("CONTRACT_ADDRESS");
        const myContract = new this.web3.eth.Contract(
            betAbi as AbiItem[],
            contractAddress
        );

        const events = myContract.events
            .allEvents({})
            .on("data", async (events) => {
                const eventValue = events.returnValues;
                const games = {
                    id: eventValue.id,
                    bet: eventValue.bet,
                    randomNumber: eventValue.randomNumber,
                    amount: eventValue.amount,
                    player: eventValue.player,
                    time: eventValue.time,
                };
                console.log(games);
                await this.betRepository.save(games);
            });
    }
}
