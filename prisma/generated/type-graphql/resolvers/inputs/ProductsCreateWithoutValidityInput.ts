import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BarcodesCreateNestedManyWithoutProductInput } from "../inputs/BarcodesCreateNestedManyWithoutProductInput";

@TypeGraphQL.InputType("ProductsCreateWithoutValidityInput", {
  isAbstract: true
})
export class ProductsCreateWithoutValidityInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  erp_code!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => BarcodesCreateNestedManyWithoutProductInput, {
    nullable: true
  })
  barcodes?: BarcodesCreateNestedManyWithoutProductInput | undefined;
}
