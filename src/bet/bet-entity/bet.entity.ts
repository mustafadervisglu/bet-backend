import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class BetEntity extends BaseEntity {
    @PrimaryColumn()
    id: string;
    @Column()
    bet: string;
    @Column()
    randomNumber: string;
    @Column()
    amount: string;
    @Column()
    player: string;
    @Column()
    time: string;
}
