import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BarcodesCreateManyInput } from "../../../inputs/BarcodesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyBarcodesArgs {
  @TypeGraphQL.Field(_type => [BarcodesCreateManyInput], {
    nullable: false
  })
  data!: BarcodesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
