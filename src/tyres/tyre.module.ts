import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { TyreResolver } from "./tyre.resolver";
import { TyreService } from "./tyre.service";

@Module({
  providers: [TyreResolver, TyreService, PrismaService],
})
export class TyreModule {}
