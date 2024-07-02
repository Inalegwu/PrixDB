import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class FastestLapService {
  constructor(private readonly prisma: PrismaService) {}

  async getFastestLaps() {
    return [];
  }

  async getFastestLapByRaceId(raceId: string) {
    return [];
  }
}
