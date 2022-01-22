import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ValidityCreateManyInput } from "../../../inputs/ValidityCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyValidityArgs {
  @TypeGraphQL.Field(_type => [ValidityCreateManyInput], {
    nullable: false
  })
  data!: ValidityCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
