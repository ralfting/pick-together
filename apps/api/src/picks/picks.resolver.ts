import { Query, Resolver } from "@nestjs/graphql";
import { PickModel } from "./picks.model";
import { PicksService } from "./picks.service";

@Resolver(() => PickModel)
export class PicksResolver {
  constructor(private readonly pricksService: PicksService) {}

  @Query(() => [PickModel])
  picks(): PickModel[] {
    return this.pricksService.findAll();
  }
}
