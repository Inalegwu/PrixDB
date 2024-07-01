import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { GrandPrixResolver } from "./grand-prix.resolver";
import { GrandPrixService } from "./grand-prix.service";

@Module({
  imports: [],
  providers: [GrandPrixService, GrandPrixResolver, PrismaService],
})
export class GrandPrixModule {}
