import { Field, ObjectType } from "@nestjs/graphql";
import { EngineManufacturer as EngineManufacturerModel } from "@prisma/client";

@ObjectType()
export class EngineManufacturer implements Omit<EngineManufacturerModel, "id"> {
  @Field()
  countryId: string;

  @Field()
  name: string;
}
