import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ValidityWhereInput } from "../inputs/ValidityWhereInput";

@TypeGraphQL.InputType("ValidityListRelationFilter", {
  isAbstract: true
})
export class ValidityListRelationFilter {
  @TypeGraphQL.Field(_type => ValidityWhereInput, {
    nullable: true
  })
  every?: ValidityWhereInput | undefined;

  @TypeGraphQL.Field(_type => ValidityWhereInput, {
    nullable: true
  })
  some?: ValidityWhereInput | undefined;

  @TypeGraphQL.Field(_type => ValidityWhereInput, {
    nullable: true
  })
  none?: ValidityWhereInput | undefined;
}
