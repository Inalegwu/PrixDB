import { Field, Int, ObjectType } from "@nestjs/graphql";
import type { ConstructorStanding, DriverStanding } from "@prisma/client";

@ObjectType()
export class ConstructorStandings implements ConstructorStanding {
  @Field()
  constructorId: string;

  @Field()
  id: string;

  @Field(() => Int)
  position: number;

  @Field(() => Int)
  points: number;
}

@ObjectType()
export class DriverStandings implements DriverStanding {
  @Field()
  driverId: string;

  @Field()
  id: string;

  @Field(() => Int)
  point: number;

  @Field(() => Int)
  position: number;
}
