import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BarcodesOrderByWithAggregationInput } from "../../../inputs/BarcodesOrderByWithAggregationInput";
import { BarcodesScalarWhereWithAggregatesInput } from "../../../inputs/BarcodesScalarWhereWithAggregatesInput";
import { BarcodesWhereInput } from "../../../inputs/BarcodesWhereInput";
import { BarcodesScalarFieldEnum } from "../../../../enums/BarcodesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByBarcodesArgs {
  @TypeGraphQL.Field(_type => BarcodesWhereInput, {
    nullable: true
  })
  where?: BarcodesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BarcodesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: BarcodesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [BarcodesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "product_id" | "barcode" | "created_At">;

  @TypeGraphQL.Field(_type => BarcodesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: BarcodesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
