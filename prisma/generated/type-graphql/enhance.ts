import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Products: crudResolvers.ProductsCrudResolver,
  Barcodes: crudResolvers.BarcodesCrudResolver,
  Validity: crudResolvers.ValidityCrudResolver
};
const actionResolversMap = {
  Products: {
    findUniqueProducts: actionResolvers.FindUniqueProductsResolver,
    findFirstProducts: actionResolvers.FindFirstProductsResolver,
    findManyProducts: actionResolvers.FindManyProductsResolver,
    createProducts: actionResolvers.CreateProductsResolver,
    createManyProducts: actionResolvers.CreateManyProductsResolver,
    deleteProducts: actionResolvers.DeleteProductsResolver,
    updateProducts: actionResolvers.UpdateProductsResolver,
    deleteManyProducts: actionResolvers.DeleteManyProductsResolver,
    updateManyProducts: actionResolvers.UpdateManyProductsResolver,
    upsertProducts: actionResolvers.UpsertProductsResolver,
    aggregateProducts: actionResolvers.AggregateProductsResolver,
    groupByProducts: actionResolvers.GroupByProductsResolver
  },
  Barcodes: {
    findUniqueBarcodes: actionResolvers.FindUniqueBarcodesResolver,
    findFirstBarcodes: actionResolvers.FindFirstBarcodesResolver,
    findManyBarcodes: actionResolvers.FindManyBarcodesResolver,
    createBarcodes: actionResolvers.CreateBarcodesResolver,
    createManyBarcodes: actionResolvers.CreateManyBarcodesResolver,
    deleteBarcodes: actionResolvers.DeleteBarcodesResolver,
    updateBarcodes: actionResolvers.UpdateBarcodesResolver,
    deleteManyBarcodes: actionResolvers.DeleteManyBarcodesResolver,
    updateManyBarcodes: actionResolvers.UpdateManyBarcodesResolver,
    upsertBarcodes: actionResolvers.UpsertBarcodesResolver,
    aggregateBarcodes: actionResolvers.AggregateBarcodesResolver,
    groupByBarcodes: actionResolvers.GroupByBarcodesResolver
  },
  Validity: {
    validity: actionResolvers.FindUniqueValidityResolver,
    findFirstValidity: actionResolvers.FindFirstValidityResolver,
    validities: actionResolvers.FindManyValidityResolver,
    createValidity: actionResolvers.CreateValidityResolver,
    createManyValidity: actionResolvers.CreateManyValidityResolver,
    deleteValidity: actionResolvers.DeleteValidityResolver,
    updateValidity: actionResolvers.UpdateValidityResolver,
    deleteManyValidity: actionResolvers.DeleteManyValidityResolver,
    updateManyValidity: actionResolvers.UpdateManyValidityResolver,
    upsertValidity: actionResolvers.UpsertValidityResolver,
    aggregateValidity: actionResolvers.AggregateValidityResolver,
    groupByValidity: actionResolvers.GroupByValidityResolver
  }
};
const crudResolversInfo = {
  Products: ["findUniqueProducts", "findFirstProducts", "findManyProducts", "createProducts", "createManyProducts", "deleteProducts", "updateProducts", "deleteManyProducts", "updateManyProducts", "upsertProducts", "aggregateProducts", "groupByProducts"],
  Barcodes: ["findUniqueBarcodes", "findFirstBarcodes", "findManyBarcodes", "createBarcodes", "createManyBarcodes", "deleteBarcodes", "updateBarcodes", "deleteManyBarcodes", "updateManyBarcodes", "upsertBarcodes", "aggregateBarcodes", "groupByBarcodes"],
  Validity: ["validity", "findFirstValidity", "validities", "createValidity", "createManyValidity", "deleteValidity", "updateValidity", "deleteManyValidity", "updateManyValidity", "upsertValidity", "aggregateValidity", "groupByValidity"]
};
const argsInfo = {
  FindUniqueProductsArgs: ["where"],
  FindFirstProductsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProductsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateProductsArgs: ["data"],
  CreateManyProductsArgs: ["data", "skipDuplicates"],
  DeleteProductsArgs: ["where"],
  UpdateProductsArgs: ["data", "where"],
  DeleteManyProductsArgs: ["where"],
  UpdateManyProductsArgs: ["data", "where"],
  UpsertProductsArgs: ["where", "create", "update"],
  AggregateProductsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByProductsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueBarcodesArgs: ["where"],
  FindFirstBarcodesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyBarcodesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateBarcodesArgs: ["data"],
  CreateManyBarcodesArgs: ["data", "skipDuplicates"],
  DeleteBarcodesArgs: ["where"],
  UpdateBarcodesArgs: ["data", "where"],
  DeleteManyBarcodesArgs: ["where"],
  UpdateManyBarcodesArgs: ["data", "where"],
  UpsertBarcodesArgs: ["where", "create", "update"],
  AggregateBarcodesArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByBarcodesArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueValidityArgs: ["where"],
  FindFirstValidityArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyValidityArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateValidityArgs: ["data"],
  CreateManyValidityArgs: ["data", "skipDuplicates"],
  DeleteValidityArgs: ["where"],
  UpdateValidityArgs: ["data", "where"],
  DeleteManyValidityArgs: ["where"],
  UpdateManyValidityArgs: ["data", "where"],
  UpsertValidityArgs: ["where", "create", "update"],
  AggregateValidityArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByValidityArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Products: relationResolvers.ProductsRelationsResolver,
  Barcodes: relationResolvers.BarcodesRelationsResolver,
  Validity: relationResolvers.ValidityRelationsResolver
};
const relationResolversInfo = {
  Products: ["Barcodes", "Validity"],
  Barcodes: ["product"],
  Validity: ["product"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Products: ["id", "erp_code", "description", "created_at"],
  Barcodes: ["id", "product_id", "created_At"],
  Validity: ["id", "product_id", "created_at", "due_date", "finished_at"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateProducts: ["_count", "_min", "_max"],
  ProductsGroupBy: ["id", "erp_code", "description", "created_at", "_count", "_min", "_max"],
  AggregateBarcodes: ["_count", "_min", "_max"],
  BarcodesGroupBy: ["id", "product_id", "created_At", "_count", "_min", "_max"],
  AggregateValidity: ["_count", "_min", "_max"],
  ValidityGroupBy: ["id", "product_id", "created_at", "due_date", "finished_at", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  ProductsCount: ["Barcodes", "Validity"],
  ProductsCountAggregate: ["id", "erp_code", "description", "created_at", "_all"],
  ProductsMinAggregate: ["id", "erp_code", "description", "created_at"],
  ProductsMaxAggregate: ["id", "erp_code", "description", "created_at"],
  BarcodesCountAggregate: ["id", "product_id", "created_At", "_all"],
  BarcodesMinAggregate: ["id", "product_id", "created_At"],
  BarcodesMaxAggregate: ["id", "product_id", "created_At"],
  ValidityCountAggregate: ["id", "product_id", "created_at", "due_date", "finished_at", "_all"],
  ValidityMinAggregate: ["id", "product_id", "created_at", "due_date", "finished_at"],
  ValidityMaxAggregate: ["id", "product_id", "created_at", "due_date", "finished_at"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  ProductsWhereInput: ["AND", "OR", "NOT", "id", "erp_code", "description", "created_at", "Barcodes", "Validity"],
  ProductsOrderByWithRelationInput: ["id", "erp_code", "description", "created_at", "Barcodes", "Validity"],
  ProductsWhereUniqueInput: ["id"],
  ProductsOrderByWithAggregationInput: ["id", "erp_code", "description", "created_at", "_count", "_max", "_min"],
  ProductsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "erp_code", "description", "created_at"],
  BarcodesWhereInput: ["AND", "OR", "NOT", "id", "product_id", "product", "created_At"],
  BarcodesOrderByWithRelationInput: ["id", "product_id", "product", "created_At"],
  BarcodesWhereUniqueInput: ["id"],
  BarcodesOrderByWithAggregationInput: ["id", "product_id", "created_At", "_count", "_max", "_min"],
  BarcodesScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "product_id", "created_At"],
  ValidityWhereInput: ["AND", "OR", "NOT", "id", "product_id", "product", "created_at", "due_date", "finished_at"],
  ValidityOrderByWithRelationInput: ["id", "product_id", "product", "created_at", "due_date", "finished_at"],
  ValidityWhereUniqueInput: ["id"],
  ValidityOrderByWithAggregationInput: ["id", "product_id", "created_at", "due_date", "finished_at", "_count", "_max", "_min"],
  ValidityScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "product_id", "created_at", "due_date", "finished_at"],
  ProductsCreateInput: ["id", "erp_code", "description", "created_at", "Barcodes", "Validity"],
  ProductsUpdateInput: ["id", "erp_code", "description", "created_at", "Barcodes", "Validity"],
  ProductsCreateManyInput: ["id", "erp_code", "description", "created_at"],
  ProductsUpdateManyMutationInput: ["id", "erp_code", "description", "created_at"],
  BarcodesCreateInput: ["id", "created_At", "product"],
  BarcodesUpdateInput: ["id", "created_At", "product"],
  BarcodesCreateManyInput: ["id", "product_id", "created_At"],
  BarcodesUpdateManyMutationInput: ["id", "created_At"],
  ValidityCreateInput: ["id", "created_at", "due_date", "finished_at", "product"],
  ValidityUpdateInput: ["id", "created_at", "due_date", "finished_at", "product"],
  ValidityCreateManyInput: ["id", "product_id", "created_at", "due_date", "finished_at"],
  ValidityUpdateManyMutationInput: ["id", "created_at", "due_date", "finished_at"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  BarcodesListRelationFilter: ["every", "some", "none"],
  ValidityListRelationFilter: ["every", "some", "none"],
  BarcodesOrderByRelationAggregateInput: ["_count"],
  ValidityOrderByRelationAggregateInput: ["_count"],
  ProductsCountOrderByAggregateInput: ["id", "erp_code", "description", "created_at"],
  ProductsMaxOrderByAggregateInput: ["id", "erp_code", "description", "created_at"],
  ProductsMinOrderByAggregateInput: ["id", "erp_code", "description", "created_at"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  ProductsRelationFilter: ["is", "isNot"],
  BarcodesCountOrderByAggregateInput: ["id", "product_id", "created_At"],
  BarcodesMaxOrderByAggregateInput: ["id", "product_id", "created_At"],
  BarcodesMinOrderByAggregateInput: ["id", "product_id", "created_At"],
  DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  ValidityCountOrderByAggregateInput: ["id", "product_id", "created_at", "due_date", "finished_at"],
  ValidityMaxOrderByAggregateInput: ["id", "product_id", "created_at", "due_date", "finished_at"],
  ValidityMinOrderByAggregateInput: ["id", "product_id", "created_at", "due_date", "finished_at"],
  DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  BarcodesCreateNestedManyWithoutProductInput: ["create", "connectOrCreate", "createMany", "connect"],
  ValidityCreateNestedManyWithoutProductInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  BarcodesUpdateManyWithoutProductInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ValidityUpdateManyWithoutProductInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ProductsCreateNestedOneWithoutBarcodesInput: ["create", "connectOrCreate", "connect"],
  ProductsUpdateOneWithoutBarcodesInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ProductsCreateNestedOneWithoutValidityInput: ["create", "connectOrCreate", "connect"],
  NullableDateTimeFieldUpdateOperationsInput: ["set"],
  ProductsUpdateOneWithoutValidityInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  BarcodesCreateWithoutProductInput: ["id", "created_At"],
  BarcodesCreateOrConnectWithoutProductInput: ["where", "create"],
  BarcodesCreateManyProductInputEnvelope: ["data", "skipDuplicates"],
  ValidityCreateWithoutProductInput: ["id", "created_at", "due_date", "finished_at"],
  ValidityCreateOrConnectWithoutProductInput: ["where", "create"],
  ValidityCreateManyProductInputEnvelope: ["data", "skipDuplicates"],
  BarcodesUpsertWithWhereUniqueWithoutProductInput: ["where", "update", "create"],
  BarcodesUpdateWithWhereUniqueWithoutProductInput: ["where", "data"],
  BarcodesUpdateManyWithWhereWithoutProductInput: ["where", "data"],
  BarcodesScalarWhereInput: ["AND", "OR", "NOT", "id", "product_id", "created_At"],
  ValidityUpsertWithWhereUniqueWithoutProductInput: ["where", "update", "create"],
  ValidityUpdateWithWhereUniqueWithoutProductInput: ["where", "data"],
  ValidityUpdateManyWithWhereWithoutProductInput: ["where", "data"],
  ValidityScalarWhereInput: ["AND", "OR", "NOT", "id", "product_id", "created_at", "due_date", "finished_at"],
  ProductsCreateWithoutBarcodesInput: ["id", "erp_code", "description", "created_at", "Validity"],
  ProductsCreateOrConnectWithoutBarcodesInput: ["where", "create"],
  ProductsUpsertWithoutBarcodesInput: ["update", "create"],
  ProductsUpdateWithoutBarcodesInput: ["id", "erp_code", "description", "created_at", "Validity"],
  ProductsCreateWithoutValidityInput: ["id", "erp_code", "description", "created_at", "Barcodes"],
  ProductsCreateOrConnectWithoutValidityInput: ["where", "create"],
  ProductsUpsertWithoutValidityInput: ["update", "create"],
  ProductsUpdateWithoutValidityInput: ["id", "erp_code", "description", "created_at", "Barcodes"],
  BarcodesCreateManyProductInput: ["id", "created_At"],
  ValidityCreateManyProductInput: ["id", "created_at", "due_date", "finished_at"],
  BarcodesUpdateWithoutProductInput: ["id", "created_At"],
  ValidityUpdateWithoutProductInput: ["id", "created_at", "due_date", "finished_at"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

