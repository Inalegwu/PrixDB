import { Query, Resolver } from "@nestjs/graphql";
import { GrandPrix } from "./grand-prix.entity";
import { GrandPrixService } from "./grand-prix.service";

@Resolver((of) => GrandPrix)
export class GrandPrixResolver {
  constructor(private grandPrix: GrandPrixService) {}

  @Query((returns) => [GrandPrix])
  async getAllGrandPrix() {
    return this.grandPrix.getAllGrandPrix();
  }
}
