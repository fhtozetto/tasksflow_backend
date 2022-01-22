import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutBarcodesInput } from "../inputs/ProductsCreateWithoutBarcodesInput";
import { ProductsUpdateWithoutBarcodesInput } from "../inputs/ProductsUpdateWithoutBarcodesInput";

@TypeGraphQL.InputType("ProductsUpsertWithoutBarcodesInput", {
  isAbstract: true
})
export class ProductsUpsertWithoutBarcodesInput {
  @TypeGraphQL.Field(_type => ProductsUpdateWithoutBarcodesInput, {
    nullable: false
  })
  update!: ProductsUpdateWithoutBarcodesInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutBarcodesInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutBarcodesInput;
}
