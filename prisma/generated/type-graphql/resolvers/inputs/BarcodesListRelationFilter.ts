import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BarcodesWhereInput } from "../inputs/BarcodesWhereInput";

@TypeGraphQL.InputType("BarcodesListRelationFilter", {
  isAbstract: true
})
export class BarcodesListRelationFilter {
  @TypeGraphQL.Field(_type => BarcodesWhereInput, {
    nullable: true
  })
  every?: BarcodesWhereInput | undefined;

  @TypeGraphQL.Field(_type => BarcodesWhereInput, {
    nullable: true
  })
  some?: BarcodesWhereInput | undefined;

  @TypeGraphQL.Field(_type => BarcodesWhereInput, {
    nullable: true
  })
  none?: BarcodesWhereInput | undefined;
}
