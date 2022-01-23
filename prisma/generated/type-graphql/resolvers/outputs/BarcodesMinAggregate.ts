import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("BarcodesMinAggregate", {
  isAbstract: true
})
export class BarcodesMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  product_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  barcode!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_At!: Date | null;
}
