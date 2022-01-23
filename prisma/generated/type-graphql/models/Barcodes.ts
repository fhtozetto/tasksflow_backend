import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Products } from "../models/Products";

@TypeGraphQL.ObjectType("Barcodes", {
  isAbstract: true
})
export class Barcodes {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  product_id?: string | null;

  product?: Products | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  barcode?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_At!: Date;
}
