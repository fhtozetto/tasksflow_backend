import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ValidityWhereInput } from "../../../inputs/ValidityWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyValidityArgs {
  @TypeGraphQL.Field(_type => ValidityWhereInput, {
    nullable: true
  })
  where?: ValidityWhereInput | undefined;
}
