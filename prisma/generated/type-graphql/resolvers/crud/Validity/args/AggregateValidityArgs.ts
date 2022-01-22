import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ValidityOrderByWithRelationInput } from "../../../inputs/ValidityOrderByWithRelationInput";
import { ValidityWhereInput } from "../../../inputs/ValidityWhereInput";
import { ValidityWhereUniqueInput } from "../../../inputs/ValidityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateValidityArgs {
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
}
