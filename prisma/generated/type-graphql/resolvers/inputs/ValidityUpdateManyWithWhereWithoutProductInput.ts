import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ValidityScalarWhereInput } from "../inputs/ValidityScalarWhereInput";
import { ValidityUpdateManyMutationInput } from "../inputs/ValidityUpdateManyMutationInput";

@TypeGraphQL.InputType("ValidityUpdateManyWithWhereWithoutProductInput", {
  isAbstract: true
})
export class ValidityUpdateManyWithWhereWithoutProductInput {
  @TypeGraphQL.Field(_type => ValidityScalarWhereInput, {
    nullable: false
  })
  where!: ValidityScalarWhereInput;

  @TypeGraphQL.Field(_type => ValidityUpdateManyMutationInput, {
    nullable: false
  })
  data!: ValidityUpdateManyMutationInput;
}
