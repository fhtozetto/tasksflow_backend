import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BarcodesCountAggregate } from "../outputs/BarcodesCountAggregate";
import { BarcodesMaxAggregate } from "../outputs/BarcodesMaxAggregate";
import { BarcodesMinAggregate } from "../outputs/BarcodesMinAggregate";

@TypeGraphQL.ObjectType("AggregateBarcodes", {
  isAbstract: true
})
export class AggregateBarcodes {
  @TypeGraphQL.Field(_type => BarcodesCountAggregate, {
    nullable: true
  })
  _count!: BarcodesCountAggregate | null;

  @TypeGraphQL.Field(_type => BarcodesMinAggregate, {
    nullable: true
  })
  _min!: BarcodesMinAggregate | null;

  @TypeGraphQL.Field(_type => BarcodesMaxAggregate, {
    nullable: true
  })
  _max!: BarcodesMaxAggregate | null;
}
