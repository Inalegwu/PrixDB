import { Query, Resolver } from "@nestjs/graphql";
import { PrismaService } from "src/prisma.service";
import { ConstructorStandings } from "./standings.entity";

@Resolver((of) => ConstructorStandings)
export class ConstructorStandingsResolver {
  constructor(private prisma: PrismaService) {}

  @Query((returns) => ConstructorStandings)
  async getConstructorStandings() {
    return await this.prisma.constructorStanding.findMany();
  }
}
