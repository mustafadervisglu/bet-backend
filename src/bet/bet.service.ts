import { Injectable, Logger } from "@nestjs/common";
import Web3 from "web3";
import betAbi from "./abi/bet-abi.json";
import { AbiItem } from "web3-utils";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class BetService {
    private readonly events = [];
    private web3: Web3;

    constructor(private configService: ConfigService) {
        this.web3 = new Web3(
            new Web3.providers.WebsocketProvider(
                this.configService.get<string>("GOERLI")
            )
        );
    }

    async fetchEventContract() {
        const contractAddress = "0x1B09FB700630156Bf242DdAe6944300C48E90701";
        const myContract = new this.web3.eth.Contract(
            betAbi as AbiItem[],
            contractAddress
        );

        const events = myContract.getPastEvents(
            "Lose",
            {
                fromBlock: 0,
                toBlock: "latest",
            },
            (error, events) => {
                if (error) {
                    console.log(error);
                }
                console.log(events[0].returnValues);
            }
        );
    }
}
