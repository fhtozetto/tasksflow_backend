import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutBarcodesInput } from "../inputs/ProductsCreateOrConnectWithoutBarcodesInput";
import { ProductsCreateWithoutBarcodesInput } from "../inputs/ProductsCreateWithoutBarcodesInput";
import { ProductsUpdateWithoutBarcodesInput } from "../inputs/ProductsUpdateWithoutBarcodesInput";
import { ProductsUpsertWithoutBarcodesInput } from "../inputs/ProductsUpsertWithoutBarcodesInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsUpdateOneWithoutBarcodesInput", {
  isAbstract: true
})
export class ProductsUpdateOneWithoutBarcodesInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutBarcodesInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutBarcodesInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutBarcodesInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutBarcodesInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpsertWithoutBarcodesInput, {
    nullable: true
  })
  upsert?: ProductsUpsertWithoutBarcodesInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpdateWithoutBarcodesInput, {
    nullable: true
  })
  update?: ProductsUpdateWithoutBarcodesInput | undefined;
}
