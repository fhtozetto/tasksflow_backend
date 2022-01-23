import * as TypeGraphQL from "type-graphql";

export enum BarcodesScalarFieldEnum {
  id = "id",
  product_id = "product_id",
  barcode = "barcode",
  created_At = "created_At"
}
TypeGraphQL.registerEnumType(BarcodesScalarFieldEnum, {
  name: "BarcodesScalarFieldEnum",
  description: undefined,
});
