import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BarcodesUpdateManyWithoutProductInput } from "../inputs/BarcodesUpdateManyWithoutProductInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { ValidityUpdateManyWithoutProductInput } from "../inputs/ValidityUpdateManyWithoutProductInput";

@TypeGraphQL.InputType("ProductsUpdateInput", {
  isAbstract: true
})
export class ProductsUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  erp_code?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BarcodesUpdateManyWithoutProductInput, {
    nullable: true
  })
  Barcodes?: BarcodesUpdateManyWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => ValidityUpdateManyWithoutProductInput, {
    nullable: true
  })
  Validity?: ValidityUpdateManyWithoutProductInput | undefined;
}
