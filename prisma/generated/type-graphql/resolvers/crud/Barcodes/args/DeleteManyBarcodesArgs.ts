import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BarcodesWhereInput } from "../../../inputs/BarcodesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyBarcodesArgs {
  @TypeGraphQL.Field(_type => BarcodesWhereInput, {
    nullable: true
  })
  where?: BarcodesWhereInput | undefined;
}
