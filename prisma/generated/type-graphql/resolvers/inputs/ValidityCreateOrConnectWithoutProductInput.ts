import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ValidityCreateWithoutProductInput } from "../inputs/ValidityCreateWithoutProductInput";
import { ValidityWhereUniqueInput } from "../inputs/ValidityWhereUniqueInput";

@TypeGraphQL.InputType("ValidityCreateOrConnectWithoutProductInput", {
  isAbstract: true
})
export class ValidityCreateOrConnectWithoutProductInput {
  @TypeGraphQL.Field(_type => ValidityWhereUniqueInput, {
    nullable: false
  })
  where!: ValidityWhereUniqueInput;

  @TypeGraphQL.Field(_type => ValidityCreateWithoutProductInput, {
    nullable: false
  })
  create!: ValidityCreateWithoutProductInput;
}
