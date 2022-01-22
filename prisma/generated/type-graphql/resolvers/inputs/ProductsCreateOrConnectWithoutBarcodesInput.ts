import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutBarcodesInput } from "../inputs/ProductsCreateWithoutBarcodesInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateOrConnectWithoutBarcodesInput", {
  isAbstract: true
})
export class ProductsCreateOrConnectWithoutBarcodesInput {
  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: false
  })
  where!: ProductsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutBarcodesInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutBarcodesInput;
}
