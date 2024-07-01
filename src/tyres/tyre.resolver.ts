import { Query, Resolver } from "@nestjs/graphql";
import { TyreManufacturer } from "./tyre.entity";
import { TyreService } from "./tyre.service";

@Resolver(() => TyreManufacturer)
export class TyreResolver {
  constructor(private readonly tyres: TyreService) {}

  @Query((returns) => [TyreManufacturer])
  async getTyreManufacturer() {
    return await this.tyres.getTyreManufacturers();
  }
}
