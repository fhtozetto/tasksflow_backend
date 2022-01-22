import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ProductsRelationFilter } from "../inputs/ProductsRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("BarcodesWhereInput", {
  isAbstract: true
})
export class BarcodesWhereInput {
  @TypeGraphQL.Field(_type => [BarcodesWhereInput], {
    nullable: true
  })
  AND?: BarcodesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BarcodesWhereInput], {
    nullable: true
  })
  OR?: BarcodesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BarcodesWhereInput], {
    nullable: true
  })
  NOT?: BarcodesWhereInput[] | undefined;

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
  created_At?: DateTimeFilter | undefined;
}
