import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BarcodesCountAggregate } from "../outputs/BarcodesCountAggregate";
import { BarcodesMaxAggregate } from "../outputs/BarcodesMaxAggregate";
import { BarcodesMinAggregate } from "../outputs/BarcodesMinAggregate";

@TypeGraphQL.ObjectType("BarcodesGroupBy", {
  isAbstract: true
})
export class BarcodesGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  product_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  barcode!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_At!: Date;

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
