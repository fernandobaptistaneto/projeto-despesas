import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity('public.entity')
export class Entitie {

    @PrimaryGeneratedColumn('uuid')
    entity_id: number

    @Column({ type: 'varchar' })
    name: string

    @Column({ type: 'timestamp' })
    created: Date

    @Column({ type: 'timestamp' })
    updated: Date

    @Column({ type: 'timestamp', default: () => { 'now()' } })
    deleted: Date

    @OneToOne(() => User, (user) => user.user_id)
    user_id: User

}