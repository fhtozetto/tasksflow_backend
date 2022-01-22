import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ValidityOrderByWithRelationInput } from "../../../inputs/ValidityOrderByWithRelationInput";
import { ValidityWhereInput } from "../../../inputs/ValidityWhereInput";
import { ValidityWhereUniqueInput } from "../../../inputs/ValidityWhereUniqueInput";
import { ValidityScalarFieldEnum } from "../../../../enums/ValidityScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstValidityArgs {
  @TypeGraphQL.Field(_type => ValidityWhereInput, {
    nullable: true
  })
  where?: ValidityWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ValidityOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ValidityOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ValidityWhereUniqueInput, {
    nullable: true
  })
  cursor?: ValidityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ValidityScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "product_id" | "created_at" | "due_date" | "finished_at"> | undefined;
}
