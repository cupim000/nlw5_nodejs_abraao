import {Entity, Column, CreateDateColumn, UpdateDateColumn,
PrimaryColumn, JoinColumn, ManyToOne} from "typeorm"; 
import {User} from "./Users";
import{ v4 as uuid} from "uuid";

@Entity("connections")
class Connection{
  @PrimaryColumn()
  id:string;
  @Column()
  admin_id: string;
  @Column()
  socket_id: string
  @JoinColumn({name: "user_id"})
  @ManyToOne(() => User)
  user: User;
  @Column()
  user_id: string;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;

  constructor(){
    if(!this.id)
    {
      this.id = uuid();
    }
  }
}

export{Connection}