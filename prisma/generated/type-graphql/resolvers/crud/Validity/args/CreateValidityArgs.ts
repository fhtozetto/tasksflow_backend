import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ValidityCreateInput } from "../../../inputs/ValidityCreateInput";

@TypeGraphQL.ArgsType()
export class CreateValidityArgs {
  @TypeGraphQL.Field(_type => ValidityCreateInput, {
    nullable: false
  })
  data!: ValidityCreateInput;
}
