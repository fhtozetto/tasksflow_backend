import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsOrderByWithRelationInput } from "../inputs/ProductsOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BarcodesOrderByWithRelationInput", {
  isAbstract: true
})
export class BarcodesOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProductsOrderByWithRelationInput, {
    nullable: true
  })
  product?: ProductsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  barcode?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_At?: "asc" | "desc" | undefined;
}
