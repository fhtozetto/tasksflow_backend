import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ValidityScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ValidityScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ValidityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ValidityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ValidityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ValidityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ValidityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ValidityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  product_id?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  due_date?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  finished_at?: DateTimeWithAggregatesFilter | undefined;
}
