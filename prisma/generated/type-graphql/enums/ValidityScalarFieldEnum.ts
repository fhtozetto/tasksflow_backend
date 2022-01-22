import * as TypeGraphQL from "type-graphql";

export enum ValidityScalarFieldEnum {
  id = "id",
  product_id = "product_id",
  created_at = "created_at",
  due_date = "due_date",
  finished_at = "finished_at"
}
TypeGraphQL.registerEnumType(ValidityScalarFieldEnum, {
  name: "ValidityScalarFieldEnum",
  description: undefined,
});
