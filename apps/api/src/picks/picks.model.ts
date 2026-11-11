import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType("PickOption")
export class PickOptionModel {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;
}

@ObjectType("Pick")
export class PickModel {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  deadline: Date;

  @Field(() => [PickOptionModel])
  options: PickOptionModel[];
}
