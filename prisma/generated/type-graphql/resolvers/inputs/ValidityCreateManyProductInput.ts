import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ValidityCreateManyProductInput", {
  isAbstract: true
})
export class ValidityCreateManyProductInput {
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
