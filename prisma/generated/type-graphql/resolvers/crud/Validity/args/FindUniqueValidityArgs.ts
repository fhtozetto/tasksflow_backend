import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ValidityWhereUniqueInput } from "../../../inputs/ValidityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueValidityArgs {
  @TypeGraphQL.Field(_type => ValidityWhereUniqueInput, {
    nullable: false
  })
  where!: ValidityWhereUniqueInput;
}
