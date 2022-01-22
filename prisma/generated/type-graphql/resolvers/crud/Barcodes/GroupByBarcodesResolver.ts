import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByBarcodesArgs } from "./args/GroupByBarcodesArgs";
import { Barcodes } from "../../../models/Barcodes";
import { BarcodesGroupBy } from "../../outputs/BarcodesGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Barcodes)
export class GroupByBarcodesResolver {
  @TypeGraphQL.Query(_returns => [BarcodesGroupBy], {
    nullable: false
  })
  async groupByBarcodes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByBarcodesArgs): Promise<BarcodesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).barcodes.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
