import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class FastestLap {
  @Field()
  id: string;
}
