import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ValidityUpdateInput } from "../../../inputs/ValidityUpdateInput";
import { ValidityWhereUniqueInput } from "../../../inputs/ValidityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateValidityArgs {
  @TypeGraphQL.Field(_type => ValidityUpdateInput, {
    nullable: false
  })
  data!: ValidityUpdateInput;

  @TypeGraphQL.Field(_type => ValidityWhereUniqueInput, {
    nullable: false
  })
  where!: ValidityWhereUniqueInput;
}
