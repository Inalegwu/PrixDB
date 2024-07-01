import { ApolloDriver, type ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { DriverModule } from "./driver/driver.module";
import { EngineModule } from "./engine/engine.module";
import { FastestLapModule } from "./fastest-laps/fastest-lap.module";
import { GrandPrixModule } from "./grand-prix/grand-prix.module";
import { ProcessService } from "./proces.service";
import { StandingsModule } from "./standings/standings.module";
import { TyreModule } from "./tyres/tyre.module";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "src/schema.gql",
    }),
    GrandPrixModule,
    StandingsModule,
    FastestLapModule,
    EngineModule,
    TyreModule,
    DriverModule,
  ],
  controllers: [],
  providers: [ProcessService],
})
export class AppModule {}
