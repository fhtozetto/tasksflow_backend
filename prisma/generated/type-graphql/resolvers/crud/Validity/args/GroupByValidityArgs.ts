import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ValidityOrderByWithAggregationInput } from "../../../inputs/ValidityOrderByWithAggregationInput";
import { ValidityScalarWhereWithAggregatesInput } from "../../../inputs/ValidityScalarWhereWithAggregatesInput";
import { ValidityWhereInput } from "../../../inputs/ValidityWhereInput";
import { ValidityScalarFieldEnum } from "../../../../enums/ValidityScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByValidityArgs {
  @TypeGraphQL.Field(_type => ValidityWhereInput, {
    nullable: true
  })
  where?: ValidityWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ValidityOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ValidityOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ValidityScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "product_id" | "created_at" | "due_date" | "finished_at">;

  @TypeGraphQL.Field(_type => ValidityScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ValidityScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
