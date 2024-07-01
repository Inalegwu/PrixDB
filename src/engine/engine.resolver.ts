import { Query, Resolver } from "@nestjs/graphql";
import { PrismaService } from "src/prisma.service";
import { EngineManufacturer } from "./engine.entity";

@Resolver(() => EngineManufacturer)
export class EngineResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query((returns) => [EngineManufacturer])
  async getEngineManufacturers() {
    return await this.prisma.engineManufacturer.findMany();
  }
}
