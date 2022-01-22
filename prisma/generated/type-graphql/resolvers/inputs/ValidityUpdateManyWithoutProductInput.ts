import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ValidityCreateManyProductInputEnvelope } from "../inputs/ValidityCreateManyProductInputEnvelope";
import { ValidityCreateOrConnectWithoutProductInput } from "../inputs/ValidityCreateOrConnectWithoutProductInput";
import { ValidityCreateWithoutProductInput } from "../inputs/ValidityCreateWithoutProductInput";
import { ValidityScalarWhereInput } from "../inputs/ValidityScalarWhereInput";
import { ValidityUpdateManyWithWhereWithoutProductInput } from "../inputs/ValidityUpdateManyWithWhereWithoutProductInput";
import { ValidityUpdateWithWhereUniqueWithoutProductInput } from "../inputs/ValidityUpdateWithWhereUniqueWithoutProductInput";
import { ValidityUpsertWithWhereUniqueWithoutProductInput } from "../inputs/ValidityUpsertWithWhereUniqueWithoutProductInput";
import { ValidityWhereUniqueInput } from "../inputs/ValidityWhereUniqueInput";

@TypeGraphQL.InputType("ValidityUpdateManyWithoutProductInput", {
  isAbstract: true
})
export class ValidityUpdateManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [ValidityCreateWithoutProductInput], {
    nullable: true
  })
  create?: ValidityCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [ValidityCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: ValidityCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [ValidityUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  upsert?: ValidityUpsertWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => ValidityCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: ValidityCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ValidityWhereUniqueInput], {
    nullable: true
  })
  set?: ValidityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ValidityWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ValidityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ValidityWhereUniqueInput], {
    nullable: true
  })
  delete?: ValidityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ValidityWhereUniqueInput], {
    nullable: true
  })
  connect?: ValidityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ValidityUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  update?: ValidityUpdateWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [ValidityUpdateManyWithWhereWithoutProductInput], {
    nullable: true
  })
  updateMany?: ValidityUpdateManyWithWhereWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [ValidityScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ValidityScalarWhereInput[] | undefined;
}
