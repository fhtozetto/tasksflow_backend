import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BarcodesCreateWithoutProductInput } from "../inputs/BarcodesCreateWithoutProductInput";
import { BarcodesUpdateWithoutProductInput } from "../inputs/BarcodesUpdateWithoutProductInput";
import { BarcodesWhereUniqueInput } from "../inputs/BarcodesWhereUniqueInput";

@TypeGraphQL.InputType("BarcodesUpsertWithWhereUniqueWithoutProductInput", {
  isAbstract: true
})
export class BarcodesUpsertWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => BarcodesWhereUniqueInput, {
    nullable: false
  })
  where!: BarcodesWhereUniqueInput;

  @TypeGraphQL.Field(_type => BarcodesUpdateWithoutProductInput, {
    nullable: false
  })
  update!: BarcodesUpdateWithoutProductInput;

  @TypeGraphQL.Field(_type => BarcodesCreateWithoutProductInput, {
    nullable: false
  })
  create!: BarcodesCreateWithoutProductInput;
}
