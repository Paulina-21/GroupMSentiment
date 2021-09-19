import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Entities {
  @PrimaryGeneratedColumn()
  entity_id: number;

  @Column()
  entity_text: string;

  @Column({"nullable":true})
  entity_category: string;

  @Column()
  entity_sub_category: string;

  @Column({type: "float"})
  entity_confidence_score:number;

}
