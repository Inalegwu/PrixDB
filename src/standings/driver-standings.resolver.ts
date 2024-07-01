import { Query, Resolver } from "@nestjs/graphql";
import { PrismaService } from "src/prisma.service";
import { DriverStandings } from "./standings.entity";

@Resolver((of) => DriverStandings)
export class DriverStandingsResolver {
  constructor(private prisma: PrismaService) {}

  @Query((returns) => DriverStandings)
  async getDriverStandings() {
    return await this.prisma.driverStanding.findMany();
  }
}
