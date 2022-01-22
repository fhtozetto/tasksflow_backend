import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BarcodesCreateWithoutProductInput } from "../inputs/BarcodesCreateWithoutProductInput";
import { BarcodesWhereUniqueInput } from "../inputs/BarcodesWhereUniqueInput";

@TypeGraphQL.InputType("BarcodesCreateOrConnectWithoutProductInput", {
  isAbstract: true
})
export class BarcodesCreateOrConnectWithoutProductInput {
  @TypeGraphQL.Field(_type => BarcodesWhereUniqueInput, {
    nullable: false
  })
  where!: BarcodesWhereUniqueInput;

  @TypeGraphQL.Field(_type => BarcodesCreateWithoutProductInput, {
    nullable: false
  })
  create!: BarcodesCreateWithoutProductInput;
}
