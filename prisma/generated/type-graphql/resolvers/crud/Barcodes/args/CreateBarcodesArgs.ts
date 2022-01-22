import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BarcodesCreateInput } from "../../../inputs/BarcodesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateBarcodesArgs {
  @TypeGraphQL.Field(_type => BarcodesCreateInput, {
    nullable: false
  })
  data!: BarcodesCreateInput;
}
