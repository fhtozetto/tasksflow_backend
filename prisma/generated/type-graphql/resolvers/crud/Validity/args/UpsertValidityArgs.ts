import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ValidityCreateInput } from "../../../inputs/ValidityCreateInput";
import { ValidityUpdateInput } from "../../../inputs/ValidityUpdateInput";
import { ValidityWhereUniqueInput } from "../../../inputs/ValidityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertValidityArgs {
  @TypeGraphQL.Field(_type => ValidityWhereUniqueInput, {
    nullable: false
  })
  where!: ValidityWhereUniqueInput;

  @TypeGraphQL.Field(_type => ValidityCreateInput, {
    nullable: false
  })
  create!: ValidityCreateInput;

  @TypeGraphQL.Field(_type => ValidityUpdateInput, {
    nullable: false
  })
  update!: ValidityUpdateInput;
}
