import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Series {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    title: string

    @Column()
    description: string

    @CreateDateColumn()
    createAt: Date

    @UpdateDateColumn()
    updateAt: Date
}
