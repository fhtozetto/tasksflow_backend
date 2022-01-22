import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BarcodesCreateManyProductInputEnvelope } from "../inputs/BarcodesCreateManyProductInputEnvelope";
import { BarcodesCreateOrConnectWithoutProductInput } from "../inputs/BarcodesCreateOrConnectWithoutProductInput";
import { BarcodesCreateWithoutProductInput } from "../inputs/BarcodesCreateWithoutProductInput";
import { BarcodesScalarWhereInput } from "../inputs/BarcodesScalarWhereInput";
import { BarcodesUpdateManyWithWhereWithoutProductInput } from "../inputs/BarcodesUpdateManyWithWhereWithoutProductInput";
import { BarcodesUpdateWithWhereUniqueWithoutProductInput } from "../inputs/BarcodesUpdateWithWhereUniqueWithoutProductInput";
import { BarcodesUpsertWithWhereUniqueWithoutProductInput } from "../inputs/BarcodesUpsertWithWhereUniqueWithoutProductInput";
import { BarcodesWhereUniqueInput } from "../inputs/BarcodesWhereUniqueInput";

@TypeGraphQL.InputType("BarcodesUpdateManyWithoutProductInput", {
  isAbstract: true
})
export class BarcodesUpdateManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [BarcodesCreateWithoutProductInput], {
    nullable: true
  })
  create?: BarcodesCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [BarcodesCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: BarcodesCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [BarcodesUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  upsert?: BarcodesUpsertWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => BarcodesCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: BarcodesCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BarcodesWhereUniqueInput], {
    nullable: true
  })
  set?: BarcodesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BarcodesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: BarcodesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BarcodesWhereUniqueInput], {
    nullable: true
  })
  delete?: BarcodesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BarcodesWhereUniqueInput], {
    nullable: true
  })
  connect?: BarcodesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BarcodesUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  update?: BarcodesUpdateWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [BarcodesUpdateManyWithWhereWithoutProductInput], {
    nullable: true
  })
  updateMany?: BarcodesUpdateManyWithWhereWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [BarcodesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BarcodesScalarWhereInput[] | undefined;
}
