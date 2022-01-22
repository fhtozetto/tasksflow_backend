import * as TypeGraphQL from "type-graphql";
import { Barcodes } from "../../../models/Barcodes";
import { Products } from "../../../models/Products";
import { Validity } from "../../../models/Validity";
import { ProductsBarcodesArgs } from "./args/ProductsBarcodesArgs";
import { ProductsValidityArgs } from "./args/ProductsValidityArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Products)
export class ProductsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Barcodes], {
    nullable: false
  })
  async Barcodes(@TypeGraphQL.Root() products: Products, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProductsBarcodesArgs): Promise<Barcodes[]> {
    return getPrismaFromContext(ctx).products.findUnique({
      where: {
        id: products.id,
      },
    }).Barcodes(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Validity], {
    nullable: false
  })
  async Validity(@TypeGraphQL.Root() products: Products, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProductsValidityArgs): Promise<Validity[]> {
    return getPrismaFromContext(ctx).products.findUnique({
      where: {
        id: products.id,
      },
    }).Validity(args);
  }
}
