import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ValidityUpdateWithoutProductInput } from "../inputs/ValidityUpdateWithoutProductInput";
import { ValidityWhereUniqueInput } from "../inputs/ValidityWhereUniqueInput";

@TypeGraphQL.InputType("ValidityUpdateWithWhereUniqueWithoutProductInput", {
  isAbstract: true
})
export class ValidityUpdateWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => ValidityWhereUniqueInput, {
    nullable: false
  })
  where!: ValidityWhereUniqueInput;

  @TypeGraphQL.Field(_type => ValidityUpdateWithoutProductInput, {
    nullable: false
  })
  data!: ValidityUpdateWithoutProductInput;
}
