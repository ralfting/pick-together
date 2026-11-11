import { Query, Resolver } from "@nestjs/graphql";
import { PickModel } from "./picks.model.ts";
import { PicksService } from "./picks.service.ts";

@Resolver(() => PickModel)
export class PicksResolver {
  constructor(private readonly pricksService: PicksService) {}

  @Query(() => [PickModel])
  picks(): PickModel[] {
    return this.pricksService.findAll();
  }
}
