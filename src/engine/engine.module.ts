import {Module} from "@nestjs/common";
import {EngineResolver} from "./engine.resolver";
import { PrismaService } from "src/prisma.service";

@Module({
    providers:[PrismaService,EngineResolver]
})
export class EngineModule{}