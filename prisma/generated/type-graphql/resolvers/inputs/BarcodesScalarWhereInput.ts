import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("BarcodesScalarWhereInput", {
  isAbstract: true
})
export class BarcodesScalarWhereInput {
  @TypeGraphQL.Field(_type => [BarcodesScalarWhereInput], {
    nullable: true
  })
  AND?: BarcodesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BarcodesScalarWhereInput], {
    nullable: true
  })
  OR?: BarcodesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BarcodesScalarWhereInput], {
    nullable: true
  })
  NOT?: BarcodesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  product_id?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_At?: DateTimeFilter | undefined;
}
