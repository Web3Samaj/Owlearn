// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types'
import { MeshContext } from '@graphql-mesh/runtime'

export namespace OwlearnTypes {
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

  export type QuerySdk = {
    /** null **/
    course: InContextSdkMethod<Query['course'], QuerycourseArgs, MeshContext>
    /** null **/
    courses: InContextSdkMethod<Query['courses'], QuerycoursesArgs, MeshContext>
    /** null **/
    resource: InContextSdkMethod<
      Query['resource'],
      QueryresourceArgs,
      MeshContext
    >
    /** null **/
    resources: InContextSdkMethod<
      Query['resources'],
      QueryresourcesArgs,
      MeshContext
    >
    /** null **/
    certificate: InContextSdkMethod<
      Query['certificate'],
      QuerycertificateArgs,
      MeshContext
    >
    /** null **/
    certificates: InContextSdkMethod<
      Query['certificates'],
      QuerycertificatesArgs,
      MeshContext
    >
    /** null **/
    educator: InContextSdkMethod<
      Query['educator'],
      QueryeducatorArgs,
      MeshContext
    >
    /** null **/
    educators: InContextSdkMethod<
      Query['educators'],
      QueryeducatorsArgs,
      MeshContext
    >
    /** null **/
    user: InContextSdkMethod<Query['user'], QueryuserArgs, MeshContext>
    /** null **/
    users: InContextSdkMethod<Query['users'], QueryusersArgs, MeshContext>
    /** Access to subgraph metadata **/
    _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  }

  export type MutationSdk = {}

  export type SubscriptionSdk = {
    /** null **/
    course: InContextSdkMethod<
      Subscription['course'],
      SubscriptioncourseArgs,
      MeshContext
    >
    /** null **/
    courses: InContextSdkMethod<
      Subscription['courses'],
      SubscriptioncoursesArgs,
      MeshContext
    >
    /** null **/
    resource: InContextSdkMethod<
      Subscription['resource'],
      SubscriptionresourceArgs,
      MeshContext
    >
    /** null **/
    resources: InContextSdkMethod<
      Subscription['resources'],
      SubscriptionresourcesArgs,
      MeshContext
    >
    /** null **/
    certificate: InContextSdkMethod<
      Subscription['certificate'],
      SubscriptioncertificateArgs,
      MeshContext
    >
    /** null **/
    certificates: InContextSdkMethod<
      Subscription['certificates'],
      SubscriptioncertificatesArgs,
      MeshContext
    >
    /** null **/
    educator: InContextSdkMethod<
      Subscription['educator'],
      SubscriptioneducatorArgs,
      MeshContext
    >
    /** null **/
    educators: InContextSdkMethod<
      Subscription['educators'],
      SubscriptioneducatorsArgs,
      MeshContext
    >
    /** null **/
    user: InContextSdkMethod<
      Subscription['user'],
      SubscriptionuserArgs,
      MeshContext
    >
    /** null **/
    users: InContextSdkMethod<
      Subscription['users'],
      SubscriptionusersArgs,
      MeshContext
    >
    /** Access to subgraph metadata **/
    _meta: InContextSdkMethod<
      Subscription['_meta'],
      Subscription_metaArgs,
      MeshContext
    >
  }

  export type Context = {
    ['owlearn']: {
      Query: QuerySdk
      Mutation: MutationSdk
      Subscription: SubscriptionSdk
    }
  }
}
