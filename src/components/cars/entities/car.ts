import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity({ name: 'cars' })
@ObjectType()
export class Car {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;
  @Column()
  @Field()
  name: string;
  @Column()
  @Field()
  dialyPrice: number;
  @Column()
  @Field()
  monthlyPrice: number;
  @Column()
  @Field()
  mileage: string;
  @Column()
  @Field()
  gas: string;
  @Column()
  @Field()
  gearType: string;
  @Column()
  @Field()
  thumbnailUrl: string;
}
