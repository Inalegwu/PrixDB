import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class TyreService {
  constructor(private readonly prisma: PrismaService) {}

  async getTyreManufacturers() {
    return this.prisma.tyreManufacturer.findMany({
      include: {
        country: true,
      },
    });
  }
}
