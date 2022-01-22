import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutBarcodesInput } from "../inputs/ProductsCreateOrConnectWithoutBarcodesInput";
import { ProductsCreateWithoutBarcodesInput } from "../inputs/ProductsCreateWithoutBarcodesInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateNestedOneWithoutBarcodesInput", {
  isAbstract: true
})
export class ProductsCreateNestedOneWithoutBarcodesInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutBarcodesInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutBarcodesInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutBarcodesInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutBarcodesInput | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput | undefined;
}
