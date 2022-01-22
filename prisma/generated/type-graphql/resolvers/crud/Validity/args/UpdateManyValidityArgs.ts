import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ValidityUpdateManyMutationInput } from "../../../inputs/ValidityUpdateManyMutationInput";
import { ValidityWhereInput } from "../../../inputs/ValidityWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyValidityArgs {
  @TypeGraphQL.Field(_type => ValidityUpdateManyMutationInput, {
    nullable: false
  })
  data!: ValidityUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ValidityWhereInput, {
    nullable: true
  })
  where?: ValidityWhereInput | undefined;
}
