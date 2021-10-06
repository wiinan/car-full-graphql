import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
export class NewCarInput {
  @Field()
  name: string;
  @Field((type) => Int)
  @Max(1000000, { message: 'Para as mensalidades, esse valor e muito alto' })
  @Min(1000, { message: 'Para as mensalidades, esse valor e muito baixo' })
  monthlyPrice: number;
  @Field((type) => Int)
  @Max(1000, { message: 'Para as diarias, esse valor e muito alto.' })
  @Min(10, { message: 'Para as diarias, esse valor e muito baixo.' })
  dialyPrice: number;
  @Field()
  mileage: string;
  @Field()
  gas: string;
  @Field()
  gearType: string;
  @Field()
  thumbnailUrl: string;
}
