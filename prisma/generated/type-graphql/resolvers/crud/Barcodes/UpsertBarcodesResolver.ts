import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertBarcodesArgs } from "./args/UpsertBarcodesArgs";
import { Barcodes } from "../../../models/Barcodes";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Barcodes)
export class UpsertBarcodesResolver {
  @TypeGraphQL.Mutation(_returns => Barcodes, {
    nullable: false
  })
  async upsertBarcodes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertBarcodesArgs): Promise<Barcodes> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).barcodes.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
