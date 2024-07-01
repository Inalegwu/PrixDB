import { Query, Resolver } from "@nestjs/graphql";
import { PrismaService } from "src/prisma.service";
import { DriverStandings } from "./standings.entity";

@Resolver((of) => DriverStandings)
export class DriverStandingsResolver {
  constructor(private prisma: PrismaService) {}

  @Query((returns) => DriverStandings)
  async getDriverStandings(): Promise<DriverStandings[]> {
    // return await this.prisma.driverStanding.findMany();
    return [
      {
        driverId: "human-endeavour",
        point: 100,
        position: 1,
      },
    ];
  }
}
