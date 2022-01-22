import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ValidityCreateManyProductInput } from "../inputs/ValidityCreateManyProductInput";

@TypeGraphQL.InputType("ValidityCreateManyProductInputEnvelope", {
  isAbstract: true
})
export class ValidityCreateManyProductInputEnvelope {
  @TypeGraphQL.Field(_type => [ValidityCreateManyProductInput], {
    nullable: false
  })
  data!: ValidityCreateManyProductInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
