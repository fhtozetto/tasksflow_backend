import * as TypeGraphQL from "type-graphql";
import { Barcodes } from "../../../models/Barcodes";
import { Products } from "../../../models/Products";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Barcodes)
export class BarcodesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Products, {
    nullable: true
  })
  async product(@TypeGraphQL.Root() barcodes: Barcodes, @TypeGraphQL.Ctx() ctx: any): Promise<Products | null> {
    return getPrismaFromContext(ctx).barcodes.findUnique({
      where: {
        id: barcodes.id,
      },
    }).product({});
  }
}
