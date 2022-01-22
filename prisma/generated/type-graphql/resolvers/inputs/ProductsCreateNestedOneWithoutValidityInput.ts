import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutValidityInput } from "../inputs/ProductsCreateOrConnectWithoutValidityInput";
import { ProductsCreateWithoutValidityInput } from "../inputs/ProductsCreateWithoutValidityInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateNestedOneWithoutValidityInput", {
  isAbstract: true
})
export class ProductsCreateNestedOneWithoutValidityInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutValidityInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutValidityInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutValidityInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutValidityInput | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput | undefined;
}
