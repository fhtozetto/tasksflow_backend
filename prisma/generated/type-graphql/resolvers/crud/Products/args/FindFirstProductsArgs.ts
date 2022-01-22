import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductsOrderByWithRelationInput } from "../../../inputs/ProductsOrderByWithRelationInput";
import { ProductsWhereInput } from "../../../inputs/ProductsWhereInput";
import { ProductsWhereUniqueInput } from "../../../inputs/ProductsWhereUniqueInput";
import { ProductsScalarFieldEnum } from "../../../../enums/ProductsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstProductsArgs {
  @TypeGraphQL.Field(_type => ProductsWhereInput, {
    nullable: true
  })
  where?: ProductsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProductsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ProductsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  cursor?: ProductsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ProductsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "erp_code" | "description" | "created_at"> | undefined;
}
