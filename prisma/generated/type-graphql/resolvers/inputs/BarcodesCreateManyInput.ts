import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("BarcodesCreateManyInput", {
  isAbstract: true
})
export class BarcodesCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  product_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  barcode?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_At?: Date | undefined;
}
