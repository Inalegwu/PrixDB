import { Field, ObjectType } from "@nestjs/graphql";
import { TyreManufacturer as TyreManufacturerModel } from "@prisma/client";

@ObjectType()
export class TyreManufacturer implements TyreManufacturerModel {
  @Field()
  country: string;

  @Field()
  id: string;

  @Field()
  name: string;
}
