import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BarcodesCreateInput } from "../../../inputs/BarcodesCreateInput";
import { BarcodesUpdateInput } from "../../../inputs/BarcodesUpdateInput";
import { BarcodesWhereUniqueInput } from "../../../inputs/BarcodesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertBarcodesArgs {
  @TypeGraphQL.Field(_type => BarcodesWhereUniqueInput, {
    nullable: false
  })
  where!: BarcodesWhereUniqueInput;

  @TypeGraphQL.Field(_type => BarcodesCreateInput, {
    nullable: false
  })
  create!: BarcodesCreateInput;

  @TypeGraphQL.Field(_type => BarcodesUpdateInput, {
    nullable: false
  })
  update!: BarcodesUpdateInput;
}
