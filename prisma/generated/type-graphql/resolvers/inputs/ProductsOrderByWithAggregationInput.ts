import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCountOrderByAggregateInput } from "../inputs/ProductsCountOrderByAggregateInput";
import { ProductsMaxOrderByAggregateInput } from "../inputs/ProductsMaxOrderByAggregateInput";
import { ProductsMinOrderByAggregateInput } from "../inputs/ProductsMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProductsOrderByWithAggregationInput", {
  isAbstract: true
})
export class ProductsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  erp_code?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProductsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ProductsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProductsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ProductsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProductsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ProductsMinOrderByAggregateInput | undefined;
}
