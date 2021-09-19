import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { ForeignKeyMetadata } from 'typeorm/metadata/ForeignKeyMetadata';
import { Article } from '../article/article.entity';
@Entity()

    export class keyPhrase
    {
        @PrimaryGeneratedColumn()
        phrase_id: number;


        @Column()
        phrase_text: string;
    }
