import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ProductsScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ProductsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ProductsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ProductsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ProductsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ProductsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  erp_code?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  description?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;
}
