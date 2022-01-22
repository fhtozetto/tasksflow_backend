import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BarcodesCountOrderByAggregateInput } from "../inputs/BarcodesCountOrderByAggregateInput";
import { BarcodesMaxOrderByAggregateInput } from "../inputs/BarcodesMaxOrderByAggregateInput";
import { BarcodesMinOrderByAggregateInput } from "../inputs/BarcodesMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BarcodesOrderByWithAggregationInput", {
  isAbstract: true
})
export class BarcodesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_At?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BarcodesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: BarcodesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BarcodesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: BarcodesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BarcodesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: BarcodesMinOrderByAggregateInput | undefined;
}
