import { Field, ObjectType } from "@nestjs/graphql";
import { EngineManufacturer as EngineManufacturerModel } from "@prisma/client";

@ObjectType()
export class EngineManufacturer implements EngineManufacturerModel {
  @Field()
  country: string;

  @Field()
  id: string;

  @Field()
  name: string;
}
