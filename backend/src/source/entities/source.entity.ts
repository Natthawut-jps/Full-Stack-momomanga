import { defaultIfEmpty } from "rxjs";
import { Series } from "src/series/entities/series.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Source {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ordinal: number

    @Column()
    chapter: number

    @Column()
    UrI: string

    
    @ManyToOne(() => Series, (series) => series.id)
    series: Series

    @CreateDateColumn()
    createAt: Date

    @UpdateDateColumn()
    updateAt: Date

}
