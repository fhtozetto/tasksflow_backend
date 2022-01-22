import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateNestedOneWithoutBarcodesInput } from "../inputs/ProductsCreateNestedOneWithoutBarcodesInput";

@TypeGraphQL.InputType("BarcodesCreateInput", {
  isAbstract: true
})
export class BarcodesCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_At?: Date | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateNestedOneWithoutBarcodesInput, {
    nullable: true
  })
  product?: ProductsCreateNestedOneWithoutBarcodesInput | undefined;
}
