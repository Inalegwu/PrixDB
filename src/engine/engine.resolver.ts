import { Query, Resolver } from "@nestjs/graphql";
import { EngineManufacturer } from "./engine.entity";
import { EngineService } from "./engine.service";

@Resolver(() => EngineManufacturer)
export class EngineResolver {
  constructor(private readonly engine: EngineService) {}

  @Query((returns) => [EngineManufacturer])
  async getEngineManufacturers() {
    return await this.engine.getEngineManufacturers();
  }
}
