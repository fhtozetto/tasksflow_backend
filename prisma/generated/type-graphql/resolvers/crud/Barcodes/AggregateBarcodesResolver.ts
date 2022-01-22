import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateBarcodesArgs } from "./args/AggregateBarcodesArgs";
import { Barcodes } from "../../../models/Barcodes";
import { AggregateBarcodes } from "../../outputs/AggregateBarcodes";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Barcodes)
export class AggregateBarcodesResolver {
  @TypeGraphQL.Query(_returns => AggregateBarcodes, {
    nullable: false
  })
  async aggregateBarcodes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBarcodesArgs): Promise<AggregateBarcodes> {
    return getPrismaFromContext(ctx).barcodes.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
