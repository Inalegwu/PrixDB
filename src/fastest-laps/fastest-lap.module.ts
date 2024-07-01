import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { FastestLapResolver } from "./fastest-lap.resolver";
import { FastestLapService } from "./fastest-lap.service";

@Module({
  providers: [FastestLapResolver, FastestLapService, PrismaService],
})
export class FastestLapModule {}
