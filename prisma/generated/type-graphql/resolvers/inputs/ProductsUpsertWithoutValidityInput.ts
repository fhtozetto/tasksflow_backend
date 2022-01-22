import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutValidityInput } from "../inputs/ProductsCreateWithoutValidityInput";
import { ProductsUpdateWithoutValidityInput } from "../inputs/ProductsUpdateWithoutValidityInput";

@TypeGraphQL.InputType("ProductsUpsertWithoutValidityInput", {
  isAbstract: true
})
export class ProductsUpsertWithoutValidityInput {
  @TypeGraphQL.Field(_type => ProductsUpdateWithoutValidityInput, {
    nullable: false
  })
  update!: ProductsUpdateWithoutValidityInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutValidityInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutValidityInput;
}
