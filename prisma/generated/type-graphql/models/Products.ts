import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Barcodes } from "../models/Barcodes";
import { Validity } from "../models/Validity";
import { ProductsCount } from "../resolvers/outputs/ProductsCount";

@TypeGraphQL.ObjectType("Products", {
  isAbstract: true
})
export class Products {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  erp_code!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  Barcodes?: Barcodes[];

  Validity?: Validity[];

  @TypeGraphQL.Field(_type => ProductsCount, {
    nullable: true
  })
  _count?: ProductsCount | null;
}
