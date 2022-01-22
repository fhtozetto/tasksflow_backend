import * as TypeGraphQL from "type-graphql";

export enum ProductsScalarFieldEnum {
  id = "id",
  erp_code = "erp_code",
  description = "description",
  created_at = "created_at"
}
TypeGraphQL.registerEnumType(ProductsScalarFieldEnum, {
  name: "ProductsScalarFieldEnum",
  description: undefined,
});
