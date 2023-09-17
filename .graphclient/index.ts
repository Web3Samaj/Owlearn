// @ts-nocheck
import {
  GraphQLResolveInfo,
  SelectionSetNode,
  FieldNode,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import { gql } from '@graphql-mesh/utils'

import type { GetMeshOptions } from '@graphql-mesh/runtime'
import type { YamlConfig } from '@graphql-mesh/types'
import { PubSub } from '@graphql-mesh/utils'
import { DefaultLogger } from '@graphql-mesh/utils'
import MeshCache from '@graphql-mesh/cache-localforage'
import { fetch as fetchFn } from '@whatwg-node/fetch'

import { MeshResolvedSource } from '@graphql-mesh/runtime'
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types'
import GraphqlHandler from '@graphql-mesh/graphql'
import BareMerger from '@graphql-mesh/merger-bare'
import { printWithCache } from '@graphql-mesh/utils'
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http'
import {
  getMesh,
  ExecuteMeshFn,
  SubscribeMeshFn,
  MeshContext as BaseMeshContext,
  MeshInstance,
} from '@graphql-mesh/runtime'
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store'
import { path as pathModule } from '@graphql-mesh/cross-helpers'
import { ImportFn } from '@graphql-mesh/types'
import type { OwlearnTypes } from './sources/owlearn/types'
import * as importedModule$0 from './sources/owlearn/introspectionSchema'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>
}

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  BigDecimal: any
  BigInt: any
  Bytes: any
  Int8: any
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']
}

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>
  number?: InputMaybe<Scalars['Int']>
  number_gte?: InputMaybe<Scalars['Int']>
}

export type Certificate = {
  id: Scalars['Bytes']
  course: Course
  certificateAddress: Scalars['Bytes']
  certificateBaseURI?: Maybe<Scalars['String']>
  certificateName?: Maybe<Scalars['String']>
  certificateSymbol?: Maybe<Scalars['String']>
  enrolledUsers?: Maybe<Array<User>>
}

export type CertificateenrolledUsersArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<User_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<User_filter>
}

export type Certificate_filter = {
  id?: InputMaybe<Scalars['Bytes']>
  id_not?: InputMaybe<Scalars['Bytes']>
  id_gt?: InputMaybe<Scalars['Bytes']>
  id_lt?: InputMaybe<Scalars['Bytes']>
  id_gte?: InputMaybe<Scalars['Bytes']>
  id_lte?: InputMaybe<Scalars['Bytes']>
  id_in?: InputMaybe<Array<Scalars['Bytes']>>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  id_contains?: InputMaybe<Scalars['Bytes']>
  id_not_contains?: InputMaybe<Scalars['Bytes']>
  course?: InputMaybe<Scalars['String']>
  course_not?: InputMaybe<Scalars['String']>
  course_gt?: InputMaybe<Scalars['String']>
  course_lt?: InputMaybe<Scalars['String']>
  course_gte?: InputMaybe<Scalars['String']>
  course_lte?: InputMaybe<Scalars['String']>
  course_in?: InputMaybe<Array<Scalars['String']>>
  course_not_in?: InputMaybe<Array<Scalars['String']>>
  course_contains?: InputMaybe<Scalars['String']>
  course_contains_nocase?: InputMaybe<Scalars['String']>
  course_not_contains?: InputMaybe<Scalars['String']>
  course_not_contains_nocase?: InputMaybe<Scalars['String']>
  course_starts_with?: InputMaybe<Scalars['String']>
  course_starts_with_nocase?: InputMaybe<Scalars['String']>
  course_not_starts_with?: InputMaybe<Scalars['String']>
  course_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  course_ends_with?: InputMaybe<Scalars['String']>
  course_ends_with_nocase?: InputMaybe<Scalars['String']>
  course_not_ends_with?: InputMaybe<Scalars['String']>
  course_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  course_?: InputMaybe<Course_filter>
  certificateAddress?: InputMaybe<Scalars['Bytes']>
  certificateAddress_not?: InputMaybe<Scalars['Bytes']>
  certificateAddress_gt?: InputMaybe<Scalars['Bytes']>
  certificateAddress_lt?: InputMaybe<Scalars['Bytes']>
  certificateAddress_gte?: InputMaybe<Scalars['Bytes']>
  certificateAddress_lte?: InputMaybe<Scalars['Bytes']>
  certificateAddress_in?: InputMaybe<Array<Scalars['Bytes']>>
  certificateAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  certificateAddress_contains?: InputMaybe<Scalars['Bytes']>
  certificateAddress_not_contains?: InputMaybe<Scalars['Bytes']>
  certificateBaseURI?: InputMaybe<Scalars['String']>
  certificateBaseURI_not?: InputMaybe<Scalars['String']>
  certificateBaseURI_gt?: InputMaybe<Scalars['String']>
  certificateBaseURI_lt?: InputMaybe<Scalars['String']>
  certificateBaseURI_gte?: InputMaybe<Scalars['String']>
  certificateBaseURI_lte?: InputMaybe<Scalars['String']>
  certificateBaseURI_in?: InputMaybe<Array<Scalars['String']>>
  certificateBaseURI_not_in?: InputMaybe<Array<Scalars['String']>>
  certificateBaseURI_contains?: InputMaybe<Scalars['String']>
  certificateBaseURI_contains_nocase?: InputMaybe<Scalars['String']>
  certificateBaseURI_not_contains?: InputMaybe<Scalars['String']>
  certificateBaseURI_not_contains_nocase?: InputMaybe<Scalars['String']>
  certificateBaseURI_starts_with?: InputMaybe<Scalars['String']>
  certificateBaseURI_starts_with_nocase?: InputMaybe<Scalars['String']>
  certificateBaseURI_not_starts_with?: InputMaybe<Scalars['String']>
  certificateBaseURI_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  certificateBaseURI_ends_with?: InputMaybe<Scalars['String']>
  certificateBaseURI_ends_with_nocase?: InputMaybe<Scalars['String']>
  certificateBaseURI_not_ends_with?: InputMaybe<Scalars['String']>
  certificateBaseURI_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  certificateName?: InputMaybe<Scalars['String']>
  certificateName_not?: InputMaybe<Scalars['String']>
  certificateName_gt?: InputMaybe<Scalars['String']>
  certificateName_lt?: InputMaybe<Scalars['String']>
  certificateName_gte?: InputMaybe<Scalars['String']>
  certificateName_lte?: InputMaybe<Scalars['String']>
  certificateName_in?: InputMaybe<Array<Scalars['String']>>
  certificateName_not_in?: InputMaybe<Array<Scalars['String']>>
  certificateName_contains?: InputMaybe<Scalars['String']>
  certificateName_contains_nocase?: InputMaybe<Scalars['String']>
  certificateName_not_contains?: InputMaybe<Scalars['String']>
  certificateName_not_contains_nocase?: InputMaybe<Scalars['String']>
  certificateName_starts_with?: InputMaybe<Scalars['String']>
  certificateName_starts_with_nocase?: InputMaybe<Scalars['String']>
  certificateName_not_starts_with?: InputMaybe<Scalars['String']>
  certificateName_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  certificateName_ends_with?: InputMaybe<Scalars['String']>
  certificateName_ends_with_nocase?: InputMaybe<Scalars['String']>
  certificateName_not_ends_with?: InputMaybe<Scalars['String']>
  certificateName_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  certificateSymbol?: InputMaybe<Scalars['String']>
  certificateSymbol_not?: InputMaybe<Scalars['String']>
  certificateSymbol_gt?: InputMaybe<Scalars['String']>
  certificateSymbol_lt?: InputMaybe<Scalars['String']>
  certificateSymbol_gte?: InputMaybe<Scalars['String']>
  certificateSymbol_lte?: InputMaybe<Scalars['String']>
  certificateSymbol_in?: InputMaybe<Array<Scalars['String']>>
  certificateSymbol_not_in?: InputMaybe<Array<Scalars['String']>>
  certificateSymbol_contains?: InputMaybe<Scalars['String']>
  certificateSymbol_contains_nocase?: InputMaybe<Scalars['String']>
  certificateSymbol_not_contains?: InputMaybe<Scalars['String']>
  certificateSymbol_not_contains_nocase?: InputMaybe<Scalars['String']>
  certificateSymbol_starts_with?: InputMaybe<Scalars['String']>
  certificateSymbol_starts_with_nocase?: InputMaybe<Scalars['String']>
  certificateSymbol_not_starts_with?: InputMaybe<Scalars['String']>
  certificateSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  certificateSymbol_ends_with?: InputMaybe<Scalars['String']>
  certificateSymbol_ends_with_nocase?: InputMaybe<Scalars['String']>
  certificateSymbol_not_ends_with?: InputMaybe<Scalars['String']>
  certificateSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  enrolledUsers?: InputMaybe<Array<Scalars['String']>>
  enrolledUsers_not?: InputMaybe<Array<Scalars['String']>>
  enrolledUsers_contains?: InputMaybe<Array<Scalars['String']>>
  enrolledUsers_contains_nocase?: InputMaybe<Array<Scalars['String']>>
  enrolledUsers_not_contains?: InputMaybe<Array<Scalars['String']>>
  enrolledUsers_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>
  enrolledUsers_?: InputMaybe<User_filter>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<Certificate_filter>>>
  or?: InputMaybe<Array<InputMaybe<Certificate_filter>>>
}

export type Certificate_orderBy =
  | 'id'
  | 'course'
  | 'course__id'
  | 'course__creatorId'
  | 'course__courseId'
  | 'course__address'
  | 'course__name'
  | 'course__symbol'
  | 'course__courseURI'
  | 'course__resourceAddress'
  | 'course__certificateAddress'
  | 'course__mintModule'
  | 'certificateAddress'
  | 'certificateBaseURI'
  | 'certificateName'
  | 'certificateSymbol'
  | 'enrolledUsers'

export type Course = {
  id: Scalars['Bytes']
  creatorId: Scalars['BigInt']
  courseId: Scalars['BigInt']
  address: Scalars['Bytes']
  name: Scalars['String']
  symbol: Scalars['String']
  courseURI: Scalars['String']
  resourceAddress?: Maybe<Scalars['Bytes']>
  certificateAddress?: Maybe<Scalars['Bytes']>
  resources?: Maybe<Array<Resource>>
  educator: Educator
  certificate?: Maybe<Certificate>
  mintModule?: Maybe<Scalars['Bytes']>
}

export type CourseresourcesArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Resource_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Resource_filter>
}

export type Course_filter = {
  id?: InputMaybe<Scalars['Bytes']>
  id_not?: InputMaybe<Scalars['Bytes']>
  id_gt?: InputMaybe<Scalars['Bytes']>
  id_lt?: InputMaybe<Scalars['Bytes']>
  id_gte?: InputMaybe<Scalars['Bytes']>
  id_lte?: InputMaybe<Scalars['Bytes']>
  id_in?: InputMaybe<Array<Scalars['Bytes']>>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  id_contains?: InputMaybe<Scalars['Bytes']>
  id_not_contains?: InputMaybe<Scalars['Bytes']>
  creatorId?: InputMaybe<Scalars['BigInt']>
  creatorId_not?: InputMaybe<Scalars['BigInt']>
  creatorId_gt?: InputMaybe<Scalars['BigInt']>
  creatorId_lt?: InputMaybe<Scalars['BigInt']>
  creatorId_gte?: InputMaybe<Scalars['BigInt']>
  creatorId_lte?: InputMaybe<Scalars['BigInt']>
  creatorId_in?: InputMaybe<Array<Scalars['BigInt']>>
  creatorId_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  courseId?: InputMaybe<Scalars['BigInt']>
  courseId_not?: InputMaybe<Scalars['BigInt']>
  courseId_gt?: InputMaybe<Scalars['BigInt']>
  courseId_lt?: InputMaybe<Scalars['BigInt']>
  courseId_gte?: InputMaybe<Scalars['BigInt']>
  courseId_lte?: InputMaybe<Scalars['BigInt']>
  courseId_in?: InputMaybe<Array<Scalars['BigInt']>>
  courseId_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  address?: InputMaybe<Scalars['Bytes']>
  address_not?: InputMaybe<Scalars['Bytes']>
  address_gt?: InputMaybe<Scalars['Bytes']>
  address_lt?: InputMaybe<Scalars['Bytes']>
  address_gte?: InputMaybe<Scalars['Bytes']>
  address_lte?: InputMaybe<Scalars['Bytes']>
  address_in?: InputMaybe<Array<Scalars['Bytes']>>
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  address_contains?: InputMaybe<Scalars['Bytes']>
  address_not_contains?: InputMaybe<Scalars['Bytes']>
  name?: InputMaybe<Scalars['String']>
  name_not?: InputMaybe<Scalars['String']>
  name_gt?: InputMaybe<Scalars['String']>
  name_lt?: InputMaybe<Scalars['String']>
  name_gte?: InputMaybe<Scalars['String']>
  name_lte?: InputMaybe<Scalars['String']>
  name_in?: InputMaybe<Array<Scalars['String']>>
  name_not_in?: InputMaybe<Array<Scalars['String']>>
  name_contains?: InputMaybe<Scalars['String']>
  name_contains_nocase?: InputMaybe<Scalars['String']>
  name_not_contains?: InputMaybe<Scalars['String']>
  name_not_contains_nocase?: InputMaybe<Scalars['String']>
  name_starts_with?: InputMaybe<Scalars['String']>
  name_starts_with_nocase?: InputMaybe<Scalars['String']>
  name_not_starts_with?: InputMaybe<Scalars['String']>
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  name_ends_with?: InputMaybe<Scalars['String']>
  name_ends_with_nocase?: InputMaybe<Scalars['String']>
  name_not_ends_with?: InputMaybe<Scalars['String']>
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  symbol?: InputMaybe<Scalars['String']>
  symbol_not?: InputMaybe<Scalars['String']>
  symbol_gt?: InputMaybe<Scalars['String']>
  symbol_lt?: InputMaybe<Scalars['String']>
  symbol_gte?: InputMaybe<Scalars['String']>
  symbol_lte?: InputMaybe<Scalars['String']>
  symbol_in?: InputMaybe<Array<Scalars['String']>>
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>
  symbol_contains?: InputMaybe<Scalars['String']>
  symbol_contains_nocase?: InputMaybe<Scalars['String']>
  symbol_not_contains?: InputMaybe<Scalars['String']>
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>
  symbol_starts_with?: InputMaybe<Scalars['String']>
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>
  symbol_not_starts_with?: InputMaybe<Scalars['String']>
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  symbol_ends_with?: InputMaybe<Scalars['String']>
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>
  symbol_not_ends_with?: InputMaybe<Scalars['String']>
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  courseURI?: InputMaybe<Scalars['String']>
  courseURI_not?: InputMaybe<Scalars['String']>
  courseURI_gt?: InputMaybe<Scalars['String']>
  courseURI_lt?: InputMaybe<Scalars['String']>
  courseURI_gte?: InputMaybe<Scalars['String']>
  courseURI_lte?: InputMaybe<Scalars['String']>
  courseURI_in?: InputMaybe<Array<Scalars['String']>>
  courseURI_not_in?: InputMaybe<Array<Scalars['String']>>
  courseURI_contains?: InputMaybe<Scalars['String']>
  courseURI_contains_nocase?: InputMaybe<Scalars['String']>
  courseURI_not_contains?: InputMaybe<Scalars['String']>
  courseURI_not_contains_nocase?: InputMaybe<Scalars['String']>
  courseURI_starts_with?: InputMaybe<Scalars['String']>
  courseURI_starts_with_nocase?: InputMaybe<Scalars['String']>
  courseURI_not_starts_with?: InputMaybe<Scalars['String']>
  courseURI_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  courseURI_ends_with?: InputMaybe<Scalars['String']>
  courseURI_ends_with_nocase?: InputMaybe<Scalars['String']>
  courseURI_not_ends_with?: InputMaybe<Scalars['String']>
  courseURI_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  resourceAddress?: InputMaybe<Scalars['Bytes']>
  resourceAddress_not?: InputMaybe<Scalars['Bytes']>
  resourceAddress_gt?: InputMaybe<Scalars['Bytes']>
  resourceAddress_lt?: InputMaybe<Scalars['Bytes']>
  resourceAddress_gte?: InputMaybe<Scalars['Bytes']>
  resourceAddress_lte?: InputMaybe<Scalars['Bytes']>
  resourceAddress_in?: InputMaybe<Array<Scalars['Bytes']>>
  resourceAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  resourceAddress_contains?: InputMaybe<Scalars['Bytes']>
  resourceAddress_not_contains?: InputMaybe<Scalars['Bytes']>
  certificateAddress?: InputMaybe<Scalars['Bytes']>
  certificateAddress_not?: InputMaybe<Scalars['Bytes']>
  certificateAddress_gt?: InputMaybe<Scalars['Bytes']>
  certificateAddress_lt?: InputMaybe<Scalars['Bytes']>
  certificateAddress_gte?: InputMaybe<Scalars['Bytes']>
  certificateAddress_lte?: InputMaybe<Scalars['Bytes']>
  certificateAddress_in?: InputMaybe<Array<Scalars['Bytes']>>
  certificateAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  certificateAddress_contains?: InputMaybe<Scalars['Bytes']>
  certificateAddress_not_contains?: InputMaybe<Scalars['Bytes']>
  resources_?: InputMaybe<Resource_filter>
  educator?: InputMaybe<Scalars['String']>
  educator_not?: InputMaybe<Scalars['String']>
  educator_gt?: InputMaybe<Scalars['String']>
  educator_lt?: InputMaybe<Scalars['String']>
  educator_gte?: InputMaybe<Scalars['String']>
  educator_lte?: InputMaybe<Scalars['String']>
  educator_in?: InputMaybe<Array<Scalars['String']>>
  educator_not_in?: InputMaybe<Array<Scalars['String']>>
  educator_contains?: InputMaybe<Scalars['String']>
  educator_contains_nocase?: InputMaybe<Scalars['String']>
  educator_not_contains?: InputMaybe<Scalars['String']>
  educator_not_contains_nocase?: InputMaybe<Scalars['String']>
  educator_starts_with?: InputMaybe<Scalars['String']>
  educator_starts_with_nocase?: InputMaybe<Scalars['String']>
  educator_not_starts_with?: InputMaybe<Scalars['String']>
  educator_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  educator_ends_with?: InputMaybe<Scalars['String']>
  educator_ends_with_nocase?: InputMaybe<Scalars['String']>
  educator_not_ends_with?: InputMaybe<Scalars['String']>
  educator_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  educator_?: InputMaybe<Educator_filter>
  certificate?: InputMaybe<Scalars['String']>
  certificate_not?: InputMaybe<Scalars['String']>
  certificate_gt?: InputMaybe<Scalars['String']>
  certificate_lt?: InputMaybe<Scalars['String']>
  certificate_gte?: InputMaybe<Scalars['String']>
  certificate_lte?: InputMaybe<Scalars['String']>
  certificate_in?: InputMaybe<Array<Scalars['String']>>
  certificate_not_in?: InputMaybe<Array<Scalars['String']>>
  certificate_contains?: InputMaybe<Scalars['String']>
  certificate_contains_nocase?: InputMaybe<Scalars['String']>
  certificate_not_contains?: InputMaybe<Scalars['String']>
  certificate_not_contains_nocase?: InputMaybe<Scalars['String']>
  certificate_starts_with?: InputMaybe<Scalars['String']>
  certificate_starts_with_nocase?: InputMaybe<Scalars['String']>
  certificate_not_starts_with?: InputMaybe<Scalars['String']>
  certificate_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  certificate_ends_with?: InputMaybe<Scalars['String']>
  certificate_ends_with_nocase?: InputMaybe<Scalars['String']>
  certificate_not_ends_with?: InputMaybe<Scalars['String']>
  certificate_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  certificate_?: InputMaybe<Certificate_filter>
  mintModule?: InputMaybe<Scalars['Bytes']>
  mintModule_not?: InputMaybe<Scalars['Bytes']>
  mintModule_gt?: InputMaybe<Scalars['Bytes']>
  mintModule_lt?: InputMaybe<Scalars['Bytes']>
  mintModule_gte?: InputMaybe<Scalars['Bytes']>
  mintModule_lte?: InputMaybe<Scalars['Bytes']>
  mintModule_in?: InputMaybe<Array<Scalars['Bytes']>>
  mintModule_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  mintModule_contains?: InputMaybe<Scalars['Bytes']>
  mintModule_not_contains?: InputMaybe<Scalars['Bytes']>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<Course_filter>>>
  or?: InputMaybe<Array<InputMaybe<Course_filter>>>
}

export type Course_orderBy =
  | 'id'
  | 'creatorId'
  | 'courseId'
  | 'address'
  | 'name'
  | 'symbol'
  | 'courseURI'
  | 'resourceAddress'
  | 'certificateAddress'
  | 'resources'
  | 'educator'
  | 'educator__id'
  | 'educator__address'
  | 'educator__educatorId'
  | 'educator__username'
  | 'certificate'
  | 'certificate__id'
  | 'certificate__certificateAddress'
  | 'certificate__certificateBaseURI'
  | 'certificate__certificateName'
  | 'certificate__certificateSymbol'
  | 'mintModule'

export type Educator = {
  id: Scalars['Bytes']
  address: Scalars['Bytes']
  educatorId?: Maybe<Scalars['BigInt']>
  username?: Maybe<Scalars['String']>
  courses?: Maybe<Array<Course>>
}

export type EducatorcoursesArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Course_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Course_filter>
}

export type Educator_filter = {
  id?: InputMaybe<Scalars['Bytes']>
  id_not?: InputMaybe<Scalars['Bytes']>
  id_gt?: InputMaybe<Scalars['Bytes']>
  id_lt?: InputMaybe<Scalars['Bytes']>
  id_gte?: InputMaybe<Scalars['Bytes']>
  id_lte?: InputMaybe<Scalars['Bytes']>
  id_in?: InputMaybe<Array<Scalars['Bytes']>>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  id_contains?: InputMaybe<Scalars['Bytes']>
  id_not_contains?: InputMaybe<Scalars['Bytes']>
  address?: InputMaybe<Scalars['Bytes']>
  address_not?: InputMaybe<Scalars['Bytes']>
  address_gt?: InputMaybe<Scalars['Bytes']>
  address_lt?: InputMaybe<Scalars['Bytes']>
  address_gte?: InputMaybe<Scalars['Bytes']>
  address_lte?: InputMaybe<Scalars['Bytes']>
  address_in?: InputMaybe<Array<Scalars['Bytes']>>
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  address_contains?: InputMaybe<Scalars['Bytes']>
  address_not_contains?: InputMaybe<Scalars['Bytes']>
  educatorId?: InputMaybe<Scalars['BigInt']>
  educatorId_not?: InputMaybe<Scalars['BigInt']>
  educatorId_gt?: InputMaybe<Scalars['BigInt']>
  educatorId_lt?: InputMaybe<Scalars['BigInt']>
  educatorId_gte?: InputMaybe<Scalars['BigInt']>
  educatorId_lte?: InputMaybe<Scalars['BigInt']>
  educatorId_in?: InputMaybe<Array<Scalars['BigInt']>>
  educatorId_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  username?: InputMaybe<Scalars['String']>
  username_not?: InputMaybe<Scalars['String']>
  username_gt?: InputMaybe<Scalars['String']>
  username_lt?: InputMaybe<Scalars['String']>
  username_gte?: InputMaybe<Scalars['String']>
  username_lte?: InputMaybe<Scalars['String']>
  username_in?: InputMaybe<Array<Scalars['String']>>
  username_not_in?: InputMaybe<Array<Scalars['String']>>
  username_contains?: InputMaybe<Scalars['String']>
  username_contains_nocase?: InputMaybe<Scalars['String']>
  username_not_contains?: InputMaybe<Scalars['String']>
  username_not_contains_nocase?: InputMaybe<Scalars['String']>
  username_starts_with?: InputMaybe<Scalars['String']>
  username_starts_with_nocase?: InputMaybe<Scalars['String']>
  username_not_starts_with?: InputMaybe<Scalars['String']>
  username_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  username_ends_with?: InputMaybe<Scalars['String']>
  username_ends_with_nocase?: InputMaybe<Scalars['String']>
  username_not_ends_with?: InputMaybe<Scalars['String']>
  username_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  courses_?: InputMaybe<Course_filter>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<Educator_filter>>>
  or?: InputMaybe<Array<InputMaybe<Educator_filter>>>
}

export type Educator_orderBy =
  | 'id'
  | 'address'
  | 'educatorId'
  | 'username'
  | 'courses'

/** Defines the order direction, either ascending or descending */
export type OrderDirection = 'asc' | 'desc'

export type Query = {
  course?: Maybe<Course>
  courses: Array<Course>
  resource?: Maybe<Resource>
  resources: Array<Resource>
  certificate?: Maybe<Certificate>
  certificates: Array<Certificate>
  educator?: Maybe<Educator>
  educators: Array<Educator>
  user?: Maybe<User>
  users: Array<User>
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>
}

export type QuerycourseArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerycoursesArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Course_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Course_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryresourceArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryresourcesArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Resource_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Resource_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerycertificateArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerycertificatesArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Certificate_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Certificate_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryeducatorArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryeducatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Educator_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Educator_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryuserArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryusersArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<User_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<User_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Query_metaArgs = {
  block?: InputMaybe<Block_height>
}

export type Resource = {
  id: Scalars['Bytes']
  course: Course
  resourceURI: Scalars['String']
  resourceId: Scalars['BigInt']
}

export type Resource_filter = {
  id?: InputMaybe<Scalars['Bytes']>
  id_not?: InputMaybe<Scalars['Bytes']>
  id_gt?: InputMaybe<Scalars['Bytes']>
  id_lt?: InputMaybe<Scalars['Bytes']>
  id_gte?: InputMaybe<Scalars['Bytes']>
  id_lte?: InputMaybe<Scalars['Bytes']>
  id_in?: InputMaybe<Array<Scalars['Bytes']>>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  id_contains?: InputMaybe<Scalars['Bytes']>
  id_not_contains?: InputMaybe<Scalars['Bytes']>
  course?: InputMaybe<Scalars['String']>
  course_not?: InputMaybe<Scalars['String']>
  course_gt?: InputMaybe<Scalars['String']>
  course_lt?: InputMaybe<Scalars['String']>
  course_gte?: InputMaybe<Scalars['String']>
  course_lte?: InputMaybe<Scalars['String']>
  course_in?: InputMaybe<Array<Scalars['String']>>
  course_not_in?: InputMaybe<Array<Scalars['String']>>
  course_contains?: InputMaybe<Scalars['String']>
  course_contains_nocase?: InputMaybe<Scalars['String']>
  course_not_contains?: InputMaybe<Scalars['String']>
  course_not_contains_nocase?: InputMaybe<Scalars['String']>
  course_starts_with?: InputMaybe<Scalars['String']>
  course_starts_with_nocase?: InputMaybe<Scalars['String']>
  course_not_starts_with?: InputMaybe<Scalars['String']>
  course_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  course_ends_with?: InputMaybe<Scalars['String']>
  course_ends_with_nocase?: InputMaybe<Scalars['String']>
  course_not_ends_with?: InputMaybe<Scalars['String']>
  course_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  course_?: InputMaybe<Course_filter>
  resourceURI?: InputMaybe<Scalars['String']>
  resourceURI_not?: InputMaybe<Scalars['String']>
  resourceURI_gt?: InputMaybe<Scalars['String']>
  resourceURI_lt?: InputMaybe<Scalars['String']>
  resourceURI_gte?: InputMaybe<Scalars['String']>
  resourceURI_lte?: InputMaybe<Scalars['String']>
  resourceURI_in?: InputMaybe<Array<Scalars['String']>>
  resourceURI_not_in?: InputMaybe<Array<Scalars['String']>>
  resourceURI_contains?: InputMaybe<Scalars['String']>
  resourceURI_contains_nocase?: InputMaybe<Scalars['String']>
  resourceURI_not_contains?: InputMaybe<Scalars['String']>
  resourceURI_not_contains_nocase?: InputMaybe<Scalars['String']>
  resourceURI_starts_with?: InputMaybe<Scalars['String']>
  resourceURI_starts_with_nocase?: InputMaybe<Scalars['String']>
  resourceURI_not_starts_with?: InputMaybe<Scalars['String']>
  resourceURI_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  resourceURI_ends_with?: InputMaybe<Scalars['String']>
  resourceURI_ends_with_nocase?: InputMaybe<Scalars['String']>
  resourceURI_not_ends_with?: InputMaybe<Scalars['String']>
  resourceURI_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  resourceId?: InputMaybe<Scalars['BigInt']>
  resourceId_not?: InputMaybe<Scalars['BigInt']>
  resourceId_gt?: InputMaybe<Scalars['BigInt']>
  resourceId_lt?: InputMaybe<Scalars['BigInt']>
  resourceId_gte?: InputMaybe<Scalars['BigInt']>
  resourceId_lte?: InputMaybe<Scalars['BigInt']>
  resourceId_in?: InputMaybe<Array<Scalars['BigInt']>>
  resourceId_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<Resource_filter>>>
  or?: InputMaybe<Array<InputMaybe<Resource_filter>>>
}

export type Resource_orderBy =
  | 'id'
  | 'course'
  | 'course__id'
  | 'course__creatorId'
  | 'course__courseId'
  | 'course__address'
  | 'course__name'
  | 'course__symbol'
  | 'course__courseURI'
  | 'course__resourceAddress'
  | 'course__certificateAddress'
  | 'course__mintModule'
  | 'resourceURI'
  | 'resourceId'

export type Subscription = {
  course?: Maybe<Course>
  courses: Array<Course>
  resource?: Maybe<Resource>
  resources: Array<Resource>
  certificate?: Maybe<Certificate>
  certificates: Array<Certificate>
  educator?: Maybe<Educator>
  educators: Array<Educator>
  user?: Maybe<User>
  users: Array<User>
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>
}

export type SubscriptioncourseArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptioncoursesArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Course_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Course_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionresourceArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionresourcesArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Resource_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Resource_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptioncertificateArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptioncertificatesArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Certificate_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Certificate_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptioneducatorArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptioneducatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Educator_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Educator_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionuserArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionusersArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<User_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<User_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>
}

export type User = {
  id: Scalars['Bytes']
  address: Scalars['Bytes']
  owlId: Scalars['BigInt']
  username: Scalars['String']
  enrolledCourses?: Maybe<Array<Course>>
}

export type UserenrolledCoursesArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Course_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Course_filter>
}

export type User_filter = {
  id?: InputMaybe<Scalars['Bytes']>
  id_not?: InputMaybe<Scalars['Bytes']>
  id_gt?: InputMaybe<Scalars['Bytes']>
  id_lt?: InputMaybe<Scalars['Bytes']>
  id_gte?: InputMaybe<Scalars['Bytes']>
  id_lte?: InputMaybe<Scalars['Bytes']>
  id_in?: InputMaybe<Array<Scalars['Bytes']>>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  id_contains?: InputMaybe<Scalars['Bytes']>
  id_not_contains?: InputMaybe<Scalars['Bytes']>
  address?: InputMaybe<Scalars['Bytes']>
  address_not?: InputMaybe<Scalars['Bytes']>
  address_gt?: InputMaybe<Scalars['Bytes']>
  address_lt?: InputMaybe<Scalars['Bytes']>
  address_gte?: InputMaybe<Scalars['Bytes']>
  address_lte?: InputMaybe<Scalars['Bytes']>
  address_in?: InputMaybe<Array<Scalars['Bytes']>>
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  address_contains?: InputMaybe<Scalars['Bytes']>
  address_not_contains?: InputMaybe<Scalars['Bytes']>
  owlId?: InputMaybe<Scalars['BigInt']>
  owlId_not?: InputMaybe<Scalars['BigInt']>
  owlId_gt?: InputMaybe<Scalars['BigInt']>
  owlId_lt?: InputMaybe<Scalars['BigInt']>
  owlId_gte?: InputMaybe<Scalars['BigInt']>
  owlId_lte?: InputMaybe<Scalars['BigInt']>
  owlId_in?: InputMaybe<Array<Scalars['BigInt']>>
  owlId_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  username?: InputMaybe<Scalars['String']>
  username_not?: InputMaybe<Scalars['String']>
  username_gt?: InputMaybe<Scalars['String']>
  username_lt?: InputMaybe<Scalars['String']>
  username_gte?: InputMaybe<Scalars['String']>
  username_lte?: InputMaybe<Scalars['String']>
  username_in?: InputMaybe<Array<Scalars['String']>>
  username_not_in?: InputMaybe<Array<Scalars['String']>>
  username_contains?: InputMaybe<Scalars['String']>
  username_contains_nocase?: InputMaybe<Scalars['String']>
  username_not_contains?: InputMaybe<Scalars['String']>
  username_not_contains_nocase?: InputMaybe<Scalars['String']>
  username_starts_with?: InputMaybe<Scalars['String']>
  username_starts_with_nocase?: InputMaybe<Scalars['String']>
  username_not_starts_with?: InputMaybe<Scalars['String']>
  username_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  username_ends_with?: InputMaybe<Scalars['String']>
  username_ends_with_nocase?: InputMaybe<Scalars['String']>
  username_not_ends_with?: InputMaybe<Scalars['String']>
  username_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  enrolledCourses?: InputMaybe<Array<Scalars['String']>>
  enrolledCourses_not?: InputMaybe<Array<Scalars['String']>>
  enrolledCourses_contains?: InputMaybe<Array<Scalars['String']>>
  enrolledCourses_contains_nocase?: InputMaybe<Array<Scalars['String']>>
  enrolledCourses_not_contains?: InputMaybe<Array<Scalars['String']>>
  enrolledCourses_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>
  enrolledCourses_?: InputMaybe<Course_filter>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<User_filter>>>
  or?: InputMaybe<Array<InputMaybe<User_filter>>>
}

export type User_orderBy =
  | 'id'
  | 'address'
  | 'owlId'
  | 'username'
  | 'enrolledCourses'

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>
  /** The block number */
  number: Scalars['Int']
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>
}

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_
  /** The deployment ID */
  deployment: Scalars['String']
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']
}

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny'

export type WithIndex<TObject> = TObject & Record<string, any>
export type ResolversObject<TObject> = WithIndex<TObject>

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode)
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>
  BlockChangedFilter: BlockChangedFilter
  Block_height: Block_height
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>
  Certificate: ResolverTypeWrapper<Certificate>
  Certificate_filter: Certificate_filter
  Certificate_orderBy: Certificate_orderBy
  Course: ResolverTypeWrapper<Course>
  Course_filter: Course_filter
  Course_orderBy: Course_orderBy
  Educator: ResolverTypeWrapper<Educator>
  Educator_filter: Educator_filter
  Educator_orderBy: Educator_orderBy
  Float: ResolverTypeWrapper<Scalars['Float']>
  ID: ResolverTypeWrapper<Scalars['ID']>
  Int: ResolverTypeWrapper<Scalars['Int']>
  Int8: ResolverTypeWrapper<Scalars['Int8']>
  OrderDirection: OrderDirection
  Query: ResolverTypeWrapper<{}>
  Resource: ResolverTypeWrapper<Resource>
  Resource_filter: Resource_filter
  Resource_orderBy: Resource_orderBy
  String: ResolverTypeWrapper<Scalars['String']>
  Subscription: ResolverTypeWrapper<{}>
  User: ResolverTypeWrapper<User>
  User_filter: User_filter
  User_orderBy: User_orderBy
  _Block_: ResolverTypeWrapper<_Block_>
  _Meta_: ResolverTypeWrapper<_Meta_>
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_
}>

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  BigDecimal: Scalars['BigDecimal']
  BigInt: Scalars['BigInt']
  BlockChangedFilter: BlockChangedFilter
  Block_height: Block_height
  Boolean: Scalars['Boolean']
  Bytes: Scalars['Bytes']
  Certificate: Certificate
  Certificate_filter: Certificate_filter
  Course: Course
  Course_filter: Course_filter
  Educator: Educator
  Educator_filter: Educator_filter
  Float: Scalars['Float']
  ID: Scalars['ID']
  Int: Scalars['Int']
  Int8: Scalars['Int8']
  Query: {}
  Resource: Resource
  Resource_filter: Resource_filter
  String: Scalars['String']
  Subscription: {}
  User: User
  User_filter: User_filter
  _Block_: _Block_
  _Meta_: _Meta_
}>

export type entityDirectiveArgs = {}

export type entityDirectiveResolver<
  Result,
  Parent,
  ContextType = MeshContext,
  Args = entityDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type subgraphIdDirectiveArgs = {
  id: Scalars['String']
}

export type subgraphIdDirectiveResolver<
  Result,
  Parent,
  ContextType = MeshContext,
  Args = subgraphIdDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type derivedFromDirectiveArgs = {
  field: Scalars['String']
}

export type derivedFromDirectiveResolver<
  Result,
  Parent,
  ContextType = MeshContext,
  Args = derivedFromDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export interface BigDecimalScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal'
}

export interface BigIntScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt'
}

export interface BytesScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes'
}

export type CertificateResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['Certificate'] = ResolversParentTypes['Certificate']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  course?: Resolver<ResolversTypes['Course'], ParentType, ContextType>
  certificateAddress?: Resolver<
    ResolversTypes['Bytes'],
    ParentType,
    ContextType
  >
  certificateBaseURI?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  certificateName?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  certificateSymbol?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  enrolledUsers?: Resolver<
    Maybe<Array<ResolversTypes['User']>>,
    ParentType,
    ContextType,
    RequireFields<CertificateenrolledUsersArgs, 'skip' | 'first'>
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type CourseResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['Course'] = ResolversParentTypes['Course']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  creatorId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  courseId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  address?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  courseURI?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  resourceAddress?: Resolver<
    Maybe<ResolversTypes['Bytes']>,
    ParentType,
    ContextType
  >
  certificateAddress?: Resolver<
    Maybe<ResolversTypes['Bytes']>,
    ParentType,
    ContextType
  >
  resources?: Resolver<
    Maybe<Array<ResolversTypes['Resource']>>,
    ParentType,
    ContextType,
    RequireFields<CourseresourcesArgs, 'skip' | 'first'>
  >
  educator?: Resolver<ResolversTypes['Educator'], ParentType, ContextType>
  certificate?: Resolver<
    Maybe<ResolversTypes['Certificate']>,
    ParentType,
    ContextType
  >
  mintModule?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type EducatorResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['Educator'] = ResolversParentTypes['Educator']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  address?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  educatorId?: Resolver<
    Maybe<ResolversTypes['BigInt']>,
    ParentType,
    ContextType
  >
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  courses?: Resolver<
    Maybe<Array<ResolversTypes['Course']>>,
    ParentType,
    ContextType,
    RequireFields<EducatorcoursesArgs, 'skip' | 'first'>
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export interface Int8ScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
  name: 'Int8'
}

export type QueryResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = ResolversObject<{
  course?: Resolver<
    Maybe<ResolversTypes['Course']>,
    ParentType,
    ContextType,
    RequireFields<QuerycourseArgs, 'id' | 'subgraphError'>
  >
  courses?: Resolver<
    Array<ResolversTypes['Course']>,
    ParentType,
    ContextType,
    RequireFields<QuerycoursesArgs, 'skip' | 'first' | 'subgraphError'>
  >
  resource?: Resolver<
    Maybe<ResolversTypes['Resource']>,
    ParentType,
    ContextType,
    RequireFields<QueryresourceArgs, 'id' | 'subgraphError'>
  >
  resources?: Resolver<
    Array<ResolversTypes['Resource']>,
    ParentType,
    ContextType,
    RequireFields<QueryresourcesArgs, 'skip' | 'first' | 'subgraphError'>
  >
  certificate?: Resolver<
    Maybe<ResolversTypes['Certificate']>,
    ParentType,
    ContextType,
    RequireFields<QuerycertificateArgs, 'id' | 'subgraphError'>
  >
  certificates?: Resolver<
    Array<ResolversTypes['Certificate']>,
    ParentType,
    ContextType,
    RequireFields<QuerycertificatesArgs, 'skip' | 'first' | 'subgraphError'>
  >
  educator?: Resolver<
    Maybe<ResolversTypes['Educator']>,
    ParentType,
    ContextType,
    RequireFields<QueryeducatorArgs, 'id' | 'subgraphError'>
  >
  educators?: Resolver<
    Array<ResolversTypes['Educator']>,
    ParentType,
    ContextType,
    RequireFields<QueryeducatorsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  user?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryuserArgs, 'id' | 'subgraphError'>
  >
  users?: Resolver<
    Array<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryusersArgs, 'skip' | 'first' | 'subgraphError'>
  >
  _meta?: Resolver<
    Maybe<ResolversTypes['_Meta_']>,
    ParentType,
    ContextType,
    Partial<Query_metaArgs>
  >
}>

export type ResourceResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['Resource'] = ResolversParentTypes['Resource']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  course?: Resolver<ResolversTypes['Course'], ParentType, ContextType>
  resourceURI?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  resourceId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type SubscriptionResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']
> = ResolversObject<{
  course?: SubscriptionResolver<
    Maybe<ResolversTypes['Course']>,
    'course',
    ParentType,
    ContextType,
    RequireFields<SubscriptioncourseArgs, 'id' | 'subgraphError'>
  >
  courses?: SubscriptionResolver<
    Array<ResolversTypes['Course']>,
    'courses',
    ParentType,
    ContextType,
    RequireFields<SubscriptioncoursesArgs, 'skip' | 'first' | 'subgraphError'>
  >
  resource?: SubscriptionResolver<
    Maybe<ResolversTypes['Resource']>,
    'resource',
    ParentType,
    ContextType,
    RequireFields<SubscriptionresourceArgs, 'id' | 'subgraphError'>
  >
  resources?: SubscriptionResolver<
    Array<ResolversTypes['Resource']>,
    'resources',
    ParentType,
    ContextType,
    RequireFields<SubscriptionresourcesArgs, 'skip' | 'first' | 'subgraphError'>
  >
  certificate?: SubscriptionResolver<
    Maybe<ResolversTypes['Certificate']>,
    'certificate',
    ParentType,
    ContextType,
    RequireFields<SubscriptioncertificateArgs, 'id' | 'subgraphError'>
  >
  certificates?: SubscriptionResolver<
    Array<ResolversTypes['Certificate']>,
    'certificates',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptioncertificatesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  educator?: SubscriptionResolver<
    Maybe<ResolversTypes['Educator']>,
    'educator',
    ParentType,
    ContextType,
    RequireFields<SubscriptioneducatorArgs, 'id' | 'subgraphError'>
  >
  educators?: SubscriptionResolver<
    Array<ResolversTypes['Educator']>,
    'educators',
    ParentType,
    ContextType,
    RequireFields<SubscriptioneducatorsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  user?: SubscriptionResolver<
    Maybe<ResolversTypes['User']>,
    'user',
    ParentType,
    ContextType,
    RequireFields<SubscriptionuserArgs, 'id' | 'subgraphError'>
  >
  users?: SubscriptionResolver<
    Array<ResolversTypes['User']>,
    'users',
    ParentType,
    ContextType,
    RequireFields<SubscriptionusersArgs, 'skip' | 'first' | 'subgraphError'>
  >
  _meta?: SubscriptionResolver<
    Maybe<ResolversTypes['_Meta_']>,
    '_meta',
    ParentType,
    ContextType,
    Partial<Subscription_metaArgs>
  >
}>

export type UserResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  address?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  owlId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  enrolledCourses?: Resolver<
    Maybe<Array<ResolversTypes['Course']>>,
    ParentType,
    ContextType,
    RequireFields<UserenrolledCoursesArgs, 'skip' | 'first'>
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type _Block_Resolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']
> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type _Meta_Resolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']
> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  hasIndexingErrors?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  BigDecimal?: GraphQLScalarType
  BigInt?: GraphQLScalarType
  Bytes?: GraphQLScalarType
  Certificate?: CertificateResolvers<ContextType>
  Course?: CourseResolvers<ContextType>
  Educator?: EducatorResolvers<ContextType>
  Int8?: GraphQLScalarType
  Query?: QueryResolvers<ContextType>
  Resource?: ResourceResolvers<ContextType>
  Subscription?: SubscriptionResolvers<ContextType>
  User?: UserResolvers<ContextType>
  _Block_?: _Block_Resolvers<ContextType>
  _Meta_?: _Meta_Resolvers<ContextType>
}>

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>
}>

export type MeshContext = OwlearnTypes.Context & BaseMeshContext

import { fileURLToPath } from '@graphql-mesh/utils'
const baseDir = pathModule.join(
  pathModule.dirname(fileURLToPath(import.meta.url)),
  '..'
)

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (
    pathModule.isAbsolute(moduleId)
      ? pathModule.relative(baseDir, moduleId)
      : moduleId
  )
    .split('\\')
    .join('/')
    .replace(baseDir + '/', '')
  switch (relativeModuleId) {
    case '.graphclient/sources/owlearn/introspectionSchema':
      return Promise.resolve(importedModule$0) as T

    default:
      return Promise.reject(
        new Error(`Cannot find module '${relativeModuleId}'.`)
      )
  }
}

const rootStore = new MeshStore(
  '.graphclient',
  new FsStoreStorageAdapter({
    cwd: baseDir,
    importFn,
    fileType: 'ts',
  }),
  {
    readonly: true,
    validate: false,
  }
)

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
  const pubsub = new PubSub()
  const sourcesStore = rootStore.child('sources')
  const logger = new DefaultLogger('GraphClient')
  const cache = new (MeshCache as any)({
    ...({} as any),
    importFn,
    store: rootStore.child('cache'),
    pubsub,
    logger,
  } as any)

  const sources: MeshResolvedSource[] = []
  const transforms: MeshTransform[] = []
  const additionalEnvelopPlugins: MeshPlugin<any>[] = []
  const owlearnTransforms = []
  const additionalTypeDefs = [] as any[]
  const owlearnHandler = new GraphqlHandler({
    name: 'owlearn',
    config: {
      endpoint:
        'https://api.studio.thegraph.com/query/46388/owlearn/version/latest',
    },
    baseDir,
    cache,
    pubsub,
    store: sourcesStore.child('owlearn'),
    logger: logger.child('owlearn'),
    importFn,
  })
  sources[0] = {
    name: 'owlearn',
    handler: owlearnHandler,
    transforms: owlearnTransforms,
  }
  const additionalResolvers = [] as any[]
  const merger = new (BareMerger as any)({
    cache,
    pubsub,
    logger: logger.child('bareMerger'),
    store: rootStore.child('bareMerger'),
  })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
        {
          document: AllCourseQueryDocument,
          get rawSDL() {
            return printWithCache(AllCourseQueryDocument)
          },
          location: 'AllCourseQueryDocument.graphql',
        },
      ]
    },
    fetchFn,
  }
}

export function createBuiltMeshHTTPHandler<
  TServerContext = {}
>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}

let meshInstance$: Promise<MeshInstance> | undefined

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions()
      .then((meshOptions) => getMesh(meshOptions))
      .then((mesh) => {
        const id = mesh.pubsub.subscribe('destroy', () => {
          meshInstance$ = undefined
          mesh.pubsub.unsubscribe(id)
        })
        return mesh
      })
  }
  return meshInstance$
}

export const execute: ExecuteMeshFn = (...args) =>
  getBuiltGraphClient().then(({ execute }) => execute(...args))

export const subscribe: SubscribeMeshFn = (...args) =>
  getBuiltGraphClient().then(({ subscribe }) => subscribe(...args))
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(
  globalContext?: TGlobalContext
) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) =>
    sdkRequesterFactory(globalContext)
  )
  return getSdk<TOperationContext, TGlobalContext>((...args) =>
    sdkRequester$.then((sdkRequester) => sdkRequester(...args))
  )
}
export type AllCourseQueryQueryVariables = Exact<{ [key: string]: never }>

export type AllCourseQueryQuery = {
  courses: Array<
    Pick<
      Course,
      | 'id'
      | 'creatorId'
      | 'courseId'
      | 'address'
      | 'certificateAddress'
      | 'courseURI'
      | 'mintModule'
      | 'name'
      | 'resourceAddress'
      | 'symbol'
    >
  >
}

export const AllCourseQueryDocument = gql`
  query AllCourseQuery {
    courses(first: 5) {
      id
      creatorId
      courseId
      address
      certificateAddress
      courseURI
      mintModule
      name
      resourceAddress
      symbol
    }
  }
` as unknown as DocumentNode<AllCourseQueryQuery, AllCourseQueryQueryVariables>

export type Requester<C = {}, E = unknown> = <R, V>(
  doc: DocumentNode,
  vars?: V,
  options?: C
) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    AllCourseQuery(
      variables?: AllCourseQueryQueryVariables,
      options?: C
    ): Promise<AllCourseQueryQuery> {
      return requester<AllCourseQueryQuery, AllCourseQueryQueryVariables>(
        AllCourseQueryDocument,
        variables,
        options
      ) as Promise<AllCourseQueryQuery>
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
