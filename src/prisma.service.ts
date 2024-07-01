import type { INestApplication, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    // @ts-ignore whatever the fuck this is
    this.$on("beforeExits", async () => {
      await app.close();
    });
  }
}
