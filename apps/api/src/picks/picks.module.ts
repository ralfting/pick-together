import { Module } from "@nestjs/common";
import { PicksResolver } from "./picks.resolver";
import { PicksService } from "./picks.service";

@Module({
  providers: [PicksResolver, PicksService],
})
export class PicksModule {}
