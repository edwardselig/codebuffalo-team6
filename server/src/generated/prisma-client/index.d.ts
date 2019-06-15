// Code generated by Prisma (prisma@1.32.0-beta). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  user: (where?: UserWhereInput) => Promise<boolean>;
  activities: (where?: activitiesWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  activities: (where: activitiesWhereUniqueInput) => activitiesPromise;
  activitieses: (args?: {
    where?: activitiesWhereInput;
    orderBy?: activitiesOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<activities>;
  activitiesesConnection: (args?: {
    where?: activitiesWhereInput;
    orderBy?: activitiesOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => activitiesConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;
  createactivities: (data: activitiesCreateInput) => activitiesPromise;
  updateactivities: (args: {
    data: activitiesUpdateInput;
    where: activitiesWhereUniqueInput;
  }) => activitiesPromise;
  updateManyactivitieses: (args: {
    data: activitiesUpdateManyMutationInput;
    where?: activitiesWhereInput;
  }) => BatchPayloadPromise;
  upsertactivities: (args: {
    where: activitiesWhereUniqueInput;
    create: activitiesCreateInput;
    update: activitiesUpdateInput;
  }) => activitiesPromise;
  deleteactivities: (where: activitiesWhereUniqueInput) => activitiesPromise;
  deleteManyactivitieses: (where?: activitiesWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
  activities: (
    where?: activitiesSubscriptionWhereInput
  ) => activitiesSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC";

export type activitiesOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "rating_ASC"
  | "rating_DESC"
  | "comments_ASC"
  | "comments_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface activitiesCreateInput {
  id?: ID_Input;
  rating?: Int;
  comments: String;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface UserUpdateInput {
  name?: String;
  email?: String;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface activitiesWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  rating?: Int;
  rating_not?: Int;
  rating_in?: Int[] | Int;
  rating_not_in?: Int[] | Int;
  rating_lt?: Int;
  rating_lte?: Int;
  rating_gt?: Int;
  rating_gte?: Int;
  comments?: String;
  comments_not?: String;
  comments_in?: String[] | String;
  comments_not_in?: String[] | String;
  comments_lt?: String;
  comments_lte?: String;
  comments_gt?: String;
  comments_gte?: String;
  comments_contains?: String;
  comments_not_contains?: String;
  comments_starts_with?: String;
  comments_not_starts_with?: String;
  comments_ends_with?: String;
  comments_not_ends_with?: String;
  AND?: activitiesWhereInput[] | activitiesWhereInput;
  OR?: activitiesWhereInput[] | activitiesWhereInput;
  NOT?: activitiesWhereInput[] | activitiesWhereInput;
}

export interface UserCreateInput {
  id?: ID_Input;
  name: String;
  email: String;
}

export type activitiesWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface activitiesUpdateManyMutationInput {
  rating?: Int;
  comments?: String;
}

export interface UserUpdateManyMutationInput {
  name?: String;
  email?: String;
}

export interface activitiesSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: activitiesWhereInput;
  AND?: activitiesSubscriptionWhereInput[] | activitiesSubscriptionWhereInput;
  OR?: activitiesSubscriptionWhereInput[] | activitiesSubscriptionWhereInput;
  NOT?: activitiesSubscriptionWhereInput[] | activitiesSubscriptionWhereInput;
}

export interface activitiesUpdateInput {
  rating?: Int;
  comments?: String;
}

export interface NodeNode {
  id: ID_Output;
}

export interface activitiesEdge {
  node: activities;
  cursor: String;
}

export interface activitiesEdgePromise
  extends Promise<activitiesEdge>,
    Fragmentable {
  node: <T = activitiesPromise>() => T;
  cursor: () => Promise<String>;
}

export interface activitiesEdgeSubscription
  extends Promise<AsyncIterator<activitiesEdge>>,
    Fragmentable {
  node: <T = activitiesSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface activitiesPreviousValues {
  id: ID_Output;
  rating?: Int;
  comments: String;
}

export interface activitiesPreviousValuesPromise
  extends Promise<activitiesPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  rating: () => Promise<Int>;
  comments: () => Promise<String>;
}

export interface activitiesPreviousValuesSubscription
  extends Promise<AsyncIterator<activitiesPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  rating: () => Promise<AsyncIterator<Int>>;
  comments: () => Promise<AsyncIterator<String>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface activitiesConnection {
  pageInfo: PageInfo;
  edges: activitiesEdge[];
}

export interface activitiesConnectionPromise
  extends Promise<activitiesConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<activitiesEdge>>() => T;
  aggregate: <T = AggregateactivitiesPromise>() => T;
}

export interface activitiesConnectionSubscription
  extends Promise<AsyncIterator<activitiesConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<activitiesEdgeSubscription>>>() => T;
  aggregate: <T = AggregateactivitiesSubscription>() => T;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
  email: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface activities {
  id: ID_Output;
  rating?: Int;
  comments: String;
}

export interface activitiesPromise extends Promise<activities>, Fragmentable {
  id: () => Promise<ID_Output>;
  rating: () => Promise<Int>;
  comments: () => Promise<String>;
}

export interface activitiesSubscription
  extends Promise<AsyncIterator<activities>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  rating: () => Promise<AsyncIterator<Int>>;
  comments: () => Promise<AsyncIterator<String>>;
}

export interface Aggregateactivities {
  count: Int;
}

export interface AggregateactivitiesPromise
  extends Promise<Aggregateactivities>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateactivitiesSubscription
  extends Promise<AsyncIterator<Aggregateactivities>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface User {
  id: ID_Output;
  name: String;
  email: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
}

export interface activitiesSubscriptionPayload {
  mutation: MutationType;
  node: activities;
  updatedFields: String[];
  previousValues: activitiesPreviousValues;
}

export interface activitiesSubscriptionPayloadPromise
  extends Promise<activitiesSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = activitiesPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = activitiesPreviousValuesPromise>() => T;
}

export interface activitiesSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<activitiesSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = activitiesSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = activitiesPreviousValuesSubscription>() => T;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

export type Long = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "activities",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
