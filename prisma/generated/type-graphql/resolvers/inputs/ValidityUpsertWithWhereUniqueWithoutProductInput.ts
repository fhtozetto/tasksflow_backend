import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ValidityCreateWithoutProductInput } from "../inputs/ValidityCreateWithoutProductInput";
import { ValidityUpdateWithoutProductInput } from "../inputs/ValidityUpdateWithoutProductInput";
import { ValidityWhereUniqueInput } from "../inputs/ValidityWhereUniqueInput";

@TypeGraphQL.InputType("ValidityUpsertWithWhereUniqueWithoutProductInput", {
  isAbstract: true
})
export class ValidityUpsertWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => ValidityWhereUniqueInput, {
    nullable: false
  })
  where!: ValidityWhereUniqueInput;

  @TypeGraphQL.Field(_type => ValidityUpdateWithoutProductInput, {
    nullable: false
  })
  update!: ValidityUpdateWithoutProductInput;

  @TypeGraphQL.Field(_type => ValidityCreateWithoutProductInput, {
    nullable: false
  })
  create!: ValidityCreateWithoutProductInput;
}
