import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ValidityCountAggregate } from "../outputs/ValidityCountAggregate";
import { ValidityMaxAggregate } from "../outputs/ValidityMaxAggregate";
import { ValidityMinAggregate } from "../outputs/ValidityMinAggregate";

@TypeGraphQL.ObjectType("AggregateValidity", {
  isAbstract: true
})
export class AggregateValidity {
  @TypeGraphQL.Field(_type => ValidityCountAggregate, {
    nullable: true
  })
  _count!: ValidityCountAggregate | null;

  @TypeGraphQL.Field(_type => ValidityMinAggregate, {
    nullable: true
  })
  _min!: ValidityMinAggregate | null;

  @TypeGraphQL.Field(_type => ValidityMaxAggregate, {
    nullable: true
  })
  _max!: ValidityMaxAggregate | null;
}
