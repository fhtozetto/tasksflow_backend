import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ValidityScalarWhereInput", {
  isAbstract: true
})
export class ValidityScalarWhereInput {
  @TypeGraphQL.Field(_type => [ValidityScalarWhereInput], {
    nullable: true
  })
  AND?: ValidityScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ValidityScalarWhereInput], {
    nullable: true
  })
  OR?: ValidityScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ValidityScalarWhereInput], {
    nullable: true
  })
  NOT?: ValidityScalarWhereInput[] | undefined;

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
