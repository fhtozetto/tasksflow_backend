import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BarcodesUpdateWithoutProductInput } from "../inputs/BarcodesUpdateWithoutProductInput";
import { BarcodesWhereUniqueInput } from "../inputs/BarcodesWhereUniqueInput";

@TypeGraphQL.InputType("BarcodesUpdateWithWhereUniqueWithoutProductInput", {
  isAbstract: true
})
export class BarcodesUpdateWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => BarcodesWhereUniqueInput, {
    nullable: false
  })
  where!: BarcodesWhereUniqueInput;

  @TypeGraphQL.Field(_type => BarcodesUpdateWithoutProductInput, {
    nullable: false
  })
  data!: BarcodesUpdateWithoutProductInput;
}
