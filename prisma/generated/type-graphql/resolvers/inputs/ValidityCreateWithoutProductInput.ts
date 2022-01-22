import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ValidityCreateWithoutProductInput", {
  isAbstract: true
})
export class ValidityCreateWithoutProductInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  due_date?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  finished_at!: Date;
}
