import { Field, ObjectType } from "@nestjs/graphql";
import { Driver as DriverModel } from "@prisma/client";

@ObjectType()
export class Driver implements Omit<DriverModel, "id"> {
  @Field()
  constructorId: string;

  @Field()
  driverId: string;
}
