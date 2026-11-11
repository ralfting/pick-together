import { Module } from "@nestjs/common";
import { PicksResolver } from "./picks.resolver.ts";
import { PicksService } from "./picks.service.ts";

@Module({
  providers: [PicksResolver, PicksService],
})
export class PicksModule {}
