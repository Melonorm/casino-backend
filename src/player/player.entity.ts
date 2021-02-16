import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Player {

  @PrimaryGeneratedColumn()
  playerId: number;

  @Column()
  playerLogin: string;

  @Column()
  playerPassword: string;

}
