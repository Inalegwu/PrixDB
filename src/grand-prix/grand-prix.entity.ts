import { Field, ObjectType } from "@nestjs/graphql";
import type { GrandPrix as GrandPrixModel } from "@prisma/client";

@ObjectType()
export class GrandPrix implements GrandPrixModel {
  @Field()
  id: string;

  @Field()
  abbreviation: string;

  @Field()
  countryId: string;

  @Field()
  fullName: string;

  @Field()
  name: string;

  @Field()
  shortName: string;
}
