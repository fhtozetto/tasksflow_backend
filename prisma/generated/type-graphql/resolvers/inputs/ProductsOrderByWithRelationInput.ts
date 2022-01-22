import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BarcodesOrderByRelationAggregateInput } from "../inputs/BarcodesOrderByRelationAggregateInput";
import { ValidityOrderByRelationAggregateInput } from "../inputs/ValidityOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProductsOrderByWithRelationInput", {
  isAbstract: true
})
export class ProductsOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => BarcodesOrderByRelationAggregateInput, {
    nullable: true
  })
  Barcodes?: BarcodesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ValidityOrderByRelationAggregateInput, {
    nullable: true
  })
  Validity?: ValidityOrderByRelationAggregateInput | undefined;
}
