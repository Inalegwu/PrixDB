import { Query, Resolver } from "@nestjs/graphql";
import { FastestLap } from "./fastest-lap.entity";
import { FastestLapService } from "./fastest-lap.service";

@Resolver((of) => FastestLap)
export class FastestLapResolver {
  constructor(private readonly fastestLaps: FastestLapService) {}

  @Query((returns) => [FastestLap])
  async getFastestLaps() {
    return this.fastestLaps.getFastestLaps();
  }
}
