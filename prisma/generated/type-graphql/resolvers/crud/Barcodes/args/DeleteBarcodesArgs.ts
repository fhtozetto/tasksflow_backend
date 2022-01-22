import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BarcodesWhereUniqueInput } from "../../../inputs/BarcodesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteBarcodesArgs {
  @TypeGraphQL.Field(_type => BarcodesWhereUniqueInput, {
    nullable: false
  })
  where!: BarcodesWhereUniqueInput;
}
