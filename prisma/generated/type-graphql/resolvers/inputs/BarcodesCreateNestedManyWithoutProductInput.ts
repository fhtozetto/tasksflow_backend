import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BarcodesCreateManyProductInputEnvelope } from "../inputs/BarcodesCreateManyProductInputEnvelope";
import { BarcodesCreateOrConnectWithoutProductInput } from "../inputs/BarcodesCreateOrConnectWithoutProductInput";
import { BarcodesCreateWithoutProductInput } from "../inputs/BarcodesCreateWithoutProductInput";
import { BarcodesWhereUniqueInput } from "../inputs/BarcodesWhereUniqueInput";

@TypeGraphQL.InputType("BarcodesCreateNestedManyWithoutProductInput", {
  isAbstract: true
})
export class BarcodesCreateNestedManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [BarcodesCreateWithoutProductInput], {
    nullable: true
  })
  create?: BarcodesCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [BarcodesCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: BarcodesCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => BarcodesCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: BarcodesCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BarcodesWhereUniqueInput], {
    nullable: true
  })
  connect?: BarcodesWhereUniqueInput[] | undefined;
}
