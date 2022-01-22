import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ValidityCountOrderByAggregateInput } from "../inputs/ValidityCountOrderByAggregateInput";
import { ValidityMaxOrderByAggregateInput } from "../inputs/ValidityMaxOrderByAggregateInput";
import { ValidityMinOrderByAggregateInput } from "../inputs/ValidityMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ValidityOrderByWithAggregationInput", {
  isAbstract: true
})
export class ValidityOrderByWithAggregationInput {
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
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  due_date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  finished_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ValidityCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ValidityCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ValidityMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ValidityMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ValidityMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ValidityMinOrderByAggregateInput | undefined;
}
