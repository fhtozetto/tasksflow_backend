import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BarcodesUpdateInput } from "../../../inputs/BarcodesUpdateInput";
import { BarcodesWhereUniqueInput } from "../../../inputs/BarcodesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateBarcodesArgs {
  @TypeGraphQL.Field(_type => BarcodesUpdateInput, {
    nullable: false
  })
  data!: BarcodesUpdateInput;

  @TypeGraphQL.Field(_type => BarcodesWhereUniqueInput, {
    nullable: false
  })
  where!: BarcodesWhereUniqueInput;
}
