import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  text_id: number;

  @Column({type:"float"})
  sentiment_positive: number;

  @Column({type: "float"})
  sentiment_neutral: number;

  @Column({type:"float"})
  sentiment_negtive: number;

  @Column()
  sentiment_score: string;

  @Column()
  language_name: string;

  @Column()
  iso6391Name: string;


  @Column({type: "float"})
  language_confidence:number;

}
