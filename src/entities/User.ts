import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity('public.user')
export class User {

    @PrimaryGeneratedColumn('uuid')
    user_id: number

    @Column({ type: 'varchar' })
    username: string

    @Column({ type: "varchar" })
    password: string

    @Column({ type: "timestamp" })
    created: Date

    @Column({ type: "timestamp", default: () => 'now()' })
    updated: Date

    @Column({ type: "timestamp", default: () => 'now()' })
    deleted: Date
}