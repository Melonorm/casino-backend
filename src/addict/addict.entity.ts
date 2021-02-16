import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Addict {
  @PrimaryGeneratedColumn()
  addictId: number;

  @Column({default: "addict"})
  addictLogin: string;

  @Column({default: 'defaultPass'})
  addictPassword: string;

}
