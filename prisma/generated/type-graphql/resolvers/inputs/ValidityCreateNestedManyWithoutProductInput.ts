import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ValidityCreateManyProductInputEnvelope } from "../inputs/ValidityCreateManyProductInputEnvelope";
import { ValidityCreateOrConnectWithoutProductInput } from "../inputs/ValidityCreateOrConnectWithoutProductInput";
import { ValidityCreateWithoutProductInput } from "../inputs/ValidityCreateWithoutProductInput";
import { ValidityWhereUniqueInput } from "../inputs/ValidityWhereUniqueInput";

@TypeGraphQL.InputType("ValidityCreateNestedManyWithoutProductInput", {
  isAbstract: true
})
export class ValidityCreateNestedManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [ValidityCreateWithoutProductInput], {
    nullable: true
  })
  create?: ValidityCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [ValidityCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: ValidityCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => ValidityCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: ValidityCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ValidityWhereUniqueInput], {
    nullable: true
  })
  connect?: ValidityWhereUniqueInput[] | undefined;
}
