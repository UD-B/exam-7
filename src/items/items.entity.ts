import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Items {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    type: string;

    @Column({ unique: true })
    quantity: number;

    @Column()
    pricePerUnit: number

    @Column()
    hasImage: boolean
}