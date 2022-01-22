import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { ProductsRelationFilter } from "../inputs/ProductsRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ValidityWhereInput", {
  isAbstract: true
})
export class ValidityWhereInput {
  @TypeGraphQL.Field(_type => [ValidityWhereInput], {
    nullable: true
  })
  AND?: ValidityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ValidityWhereInput], {
    nullable: true
  })
  OR?: ValidityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ValidityWhereInput], {
    nullable: true
  })
  NOT?: ValidityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  product_id?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ProductsRelationFilter, {
    nullable: true
  })
  product?: ProductsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  due_date?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  finished_at?: DateTimeFilter | undefined;
}
