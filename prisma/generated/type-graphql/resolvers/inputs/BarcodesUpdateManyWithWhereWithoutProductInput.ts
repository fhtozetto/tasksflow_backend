import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BarcodesScalarWhereInput } from "../inputs/BarcodesScalarWhereInput";
import { BarcodesUpdateManyMutationInput } from "../inputs/BarcodesUpdateManyMutationInput";

@TypeGraphQL.InputType("BarcodesUpdateManyWithWhereWithoutProductInput", {
  isAbstract: true
})
export class BarcodesUpdateManyWithWhereWithoutProductInput {
  @TypeGraphQL.Field(_type => BarcodesScalarWhereInput, {
    nullable: false
  })
  where!: BarcodesScalarWhereInput;

  @TypeGraphQL.Field(_type => BarcodesUpdateManyMutationInput, {
    nullable: false
  })
  data!: BarcodesUpdateManyMutationInput;
}
