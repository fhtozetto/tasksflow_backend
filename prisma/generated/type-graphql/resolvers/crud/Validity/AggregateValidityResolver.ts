import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateValidityArgs } from "./args/AggregateValidityArgs";
import { Validity } from "../../../models/Validity";
import { AggregateValidity } from "../../outputs/AggregateValidity";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Validity)
export class AggregateValidityResolver {
  @TypeGraphQL.Query(_returns => AggregateValidity, {
    nullable: false
  })
  async aggregateValidity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateValidityArgs): Promise<AggregateValidity> {
    return getPrismaFromContext(ctx).validity.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
