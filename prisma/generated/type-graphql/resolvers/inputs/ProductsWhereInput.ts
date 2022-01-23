import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BarcodesListRelationFilter } from "../inputs/BarcodesListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { ValidityListRelationFilter } from "../inputs/ValidityListRelationFilter";

@TypeGraphQL.InputType("ProductsWhereInput", {
  isAbstract: true
})
export class ProductsWhereInput {
  @TypeGraphQL.Field(_type => [ProductsWhereInput], {
    nullable: true
  })
  AND?: ProductsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductsWhereInput], {
    nullable: true
  })
  OR?: ProductsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductsWhereInput], {
    nullable: true
  })
  NOT?: ProductsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  erp_code?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => BarcodesListRelationFilter, {
    nullable: true
  })
  barcodes?: BarcodesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ValidityListRelationFilter, {
    nullable: true
  })
  validity?: ValidityListRelationFilter | undefined;
}
