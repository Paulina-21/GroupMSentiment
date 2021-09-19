import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { ForeignKeyMetadata } from 'typeorm/metadata/ForeignKeyMetadata';
import { Article } from '../article/article.entity';
import { Entities } from '../entities/entities.entity';
@Entity()

    export class EntityArticle
    {
        @PrimaryGeneratedColumn()
        EntArt_id: number;

        @OneToMany(type => Article, article=>article.text_id ) articles: Article[];
        @OneToMany(type => Entities, entity => entity.entity_id) entities: Entities[];
        
    }
