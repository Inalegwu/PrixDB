import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import type { GrandPrix } from "./grand-prix.entity";

@Injectable()
export class GrandPrixService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllGrandPrix(): Promise<GrandPrix[]> {
    return await this.prisma.grandPrix.findMany();
  }
}
