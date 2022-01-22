import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BarcodesOrderByWithRelationInput } from "../../../inputs/BarcodesOrderByWithRelationInput";
import { BarcodesWhereInput } from "../../../inputs/BarcodesWhereInput";
import { BarcodesWhereUniqueInput } from "../../../inputs/BarcodesWhereUniqueInput";
import { BarcodesScalarFieldEnum } from "../../../../enums/BarcodesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyBarcodesArgs {
  @TypeGraphQL.Field(_type => BarcodesWhereInput, {
    nullable: true
  })
  where?: BarcodesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BarcodesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: BarcodesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => BarcodesWhereUniqueInput, {
    nullable: true
  })
  cursor?: BarcodesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [BarcodesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "product_id" | "created_At"> | undefined;
}
