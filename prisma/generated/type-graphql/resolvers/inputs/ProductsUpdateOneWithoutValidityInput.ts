import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutValidityInput } from "../inputs/ProductsCreateOrConnectWithoutValidityInput";
import { ProductsCreateWithoutValidityInput } from "../inputs/ProductsCreateWithoutValidityInput";
import { ProductsUpdateWithoutValidityInput } from "../inputs/ProductsUpdateWithoutValidityInput";
import { ProductsUpsertWithoutValidityInput } from "../inputs/ProductsUpsertWithoutValidityInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsUpdateOneWithoutValidityInput", {
  isAbstract: true
})
export class ProductsUpdateOneWithoutValidityInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutValidityInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutValidityInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutValidityInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutValidityInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpsertWithoutValidityInput, {
    nullable: true
  })
  upsert?: ProductsUpsertWithoutValidityInput | undefined;

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

  @TypeGraphQL.Field(_type => ProductsUpdateWithoutValidityInput, {
    nullable: true
  })
  update?: ProductsUpdateWithoutValidityInput | undefined;
}
