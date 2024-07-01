import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { ConstructorStandingsResolver } from "./constructor-standings.resolver";
import { DriverStandingsResolver } from "./driver-standings.resolver";

@Module({
  providers: [
    ConstructorStandingsResolver,
    DriverStandingsResolver,
    PrismaService,
  ],
})
export class StandingsModule {}
