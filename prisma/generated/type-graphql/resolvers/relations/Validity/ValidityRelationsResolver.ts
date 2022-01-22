import * as TypeGraphQL from "type-graphql";
import { Products } from "../../../models/Products";
import { Validity } from "../../../models/Validity";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Validity)
export class ValidityRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Products, {
    nullable: true
  })
  async product(@TypeGraphQL.Root() validity: Validity, @TypeGraphQL.Ctx() ctx: any): Promise<Products | null> {
    return getPrismaFromContext(ctx).validity.findUnique({
      where: {
        id: validity.id,
      },
    }).product({});
  }
}
