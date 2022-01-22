import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ValidityCountAggregate } from "../outputs/ValidityCountAggregate";
import { ValidityMaxAggregate } from "../outputs/ValidityMaxAggregate";
import { ValidityMinAggregate } from "../outputs/ValidityMinAggregate";

@TypeGraphQL.ObjectType("ValidityGroupBy", {
  isAbstract: true
})
export class ValidityGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  product_id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  due_date!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  finished_at!: Date;

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
