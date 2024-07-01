import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { EngineResolver } from "./engine.resolver";
import { EngineService } from "./engine.service";

@Module({
  providers: [PrismaService, EngineResolver, EngineService],
})
export class EngineModule {}
