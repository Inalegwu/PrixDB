import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class EngineService {
  constructor(private readonly prisma: PrismaService) {}
}
