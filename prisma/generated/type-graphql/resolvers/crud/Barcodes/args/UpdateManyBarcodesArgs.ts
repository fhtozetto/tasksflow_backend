import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BarcodesUpdateManyMutationInput } from "../../../inputs/BarcodesUpdateManyMutationInput";
import { BarcodesWhereInput } from "../../../inputs/BarcodesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBarcodesArgs {
  @TypeGraphQL.Field(_type => BarcodesUpdateManyMutationInput, {
    nullable: false
  })
  data!: BarcodesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => BarcodesWhereInput, {
    nullable: true
  })
  where?: BarcodesWhereInput | undefined;
}
