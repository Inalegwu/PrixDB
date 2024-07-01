import { Field, ObjectType } from "@nestjs/graphql";
import { TyreManufacturer as TyreManufacturerModel } from "@prisma/client";

@ObjectType()
export class TyreManufacturer implements TyreManufacturerModel {
  @Field()
  id: string;

  @Field()
  countryId: string;

  @Field()
  name: string;
}
