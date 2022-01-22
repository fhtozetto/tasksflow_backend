import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductsOrderByWithAggregationInput } from "../../../inputs/ProductsOrderByWithAggregationInput";
import { ProductsScalarWhereWithAggregatesInput } from "../../../inputs/ProductsScalarWhereWithAggregatesInput";
import { ProductsWhereInput } from "../../../inputs/ProductsWhereInput";
import { ProductsScalarFieldEnum } from "../../../../enums/ProductsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProductsArgs {
  @TypeGraphQL.Field(_type => ProductsWhereInput, {
    nullable: true
  })
  where?: ProductsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProductsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ProductsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "erp_code" | "description" | "created_at">;

  @TypeGraphQL.Field(_type => ProductsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ProductsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
