import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm"
import { v4 as uuid} from 'uuid'

@Entity('users')
export class User {

    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    phone: string

    @Column()
    email: string
    
    @Column()
    password: string
    
    @CreateDateColumn()
    created_at: Date
    
    @CreateDateColumn()
    updated_at: Date

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
}
