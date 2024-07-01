import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { DriverResolver } from "./driver.resolver";
import { DriverService } from "./driver.service";

@Module({
  providers: [PrismaService, DriverResolver, DriverService],
})
export class DriverModule {}
