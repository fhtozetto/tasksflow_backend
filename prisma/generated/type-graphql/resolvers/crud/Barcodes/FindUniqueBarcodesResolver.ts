import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueBarcodesArgs } from "./args/FindUniqueBarcodesArgs";
import { Barcodes } from "../../../models/Barcodes";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Barcodes)
export class FindUniqueBarcodesResolver {
  @TypeGraphQL.Query(_returns => Barcodes, {
    nullable: true
  })
  async findUniqueBarcodes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueBarcodesArgs): Promise<Barcodes | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).barcodes.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
