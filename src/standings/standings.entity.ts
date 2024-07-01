import { Field, Int, ObjectType } from "@nestjs/graphql";
import type { ConstructorStanding, DriverStanding } from "@prisma/client";

@ObjectType()
export class ConstructorStandings implements Omit<ConstructorStanding, "id"> {
  @Field()
  constructorId: string;

  @Field(() => Int)
  position: number;

  @Field(() => Int)
  points: number;
}

@ObjectType()
export class DriverStandings implements Omit<DriverStanding, "id"> {
  @Field()
  driverId: string;

  @Field(() => Int)
  point: number;

  @Field(() => Int)
  position: number;
}
