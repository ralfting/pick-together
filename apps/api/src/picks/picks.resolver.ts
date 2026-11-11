import { Args, ID, Query, Resolver } from "@nestjs/graphql";
import { PickModel } from "./picks.model.ts";
import { PicksService } from "./picks.service.ts";

@Resolver(() => PickModel)
export class PicksResolver {
  constructor(private readonly picksService: PicksService) {}

  @Query(() => [PickModel])
  picks(): PickModel[] {
    return this.picksService.findAll();
  }

  @Query(() => PickModel, { nullable: true })
  pick(@Args("id", { type: () => ID }) id: string): PickModel | null {
    return this.picksService.findById(id);
  }
}
