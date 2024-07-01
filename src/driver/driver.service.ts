import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class DriverService {
  constructor(private readonly prisma: PrismaService) {}

  async getDriver(driverId: string) {
    return await this.prisma.driver.findFirst({
      where: {
        driverId,
      },
    });
  }
}
