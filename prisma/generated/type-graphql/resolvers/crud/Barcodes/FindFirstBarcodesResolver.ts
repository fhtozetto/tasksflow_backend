import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstBarcodesArgs } from "./args/FindFirstBarcodesArgs";
import { Barcodes } from "../../../models/Barcodes";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Barcodes)
export class FindFirstBarcodesResolver {
  @TypeGraphQL.Query(_returns => Barcodes, {
    nullable: true
  })
  async findFirstBarcodes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstBarcodesArgs): Promise<Barcodes | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).barcodes.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
