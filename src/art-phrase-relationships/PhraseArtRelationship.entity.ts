import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { ForeignKeyMetadata } from 'typeorm/metadata/ForeignKeyMetadata';
import { Article } from '../article/article.entity';
import { keyPhrase } from '../phrase/keyPhrase.entity';
@Entity()

    export class PhraseArticle
    {
        @PrimaryGeneratedColumn()
        EntArt_id: number;

        @OneToMany(type => Article, article=>article.text_id ) articles: Article[];
        @OneToMany(type => keyPhrase, phrase => phrase.phrase_id) phrases: keyPhrase[];
        
    }