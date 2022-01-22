import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BarcodesCreateManyProductInput } from "../inputs/BarcodesCreateManyProductInput";

@TypeGraphQL.InputType("BarcodesCreateManyProductInputEnvelope", {
  isAbstract: true
})
export class BarcodesCreateManyProductInputEnvelope {
  @TypeGraphQL.Field(_type => [BarcodesCreateManyProductInput], {
    nullable: false
  })
  data!: BarcodesCreateManyProductInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
