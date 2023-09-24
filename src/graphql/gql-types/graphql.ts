/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mood = {
  __typename?: 'Mood';
  description: Scalars['String']['output'];
  emoji: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  word?: Maybe<Word>;
};

export type MoodsResults = {
  __typename?: 'MoodsResults';
  moods: Array<Mood>;
  pagination: Pagination;
};

export type Mutation = {
  __typename?: 'Mutation';
  saveCurrentMood: Array<Mood>;
};


export type MutationSaveCurrentMoodArgs = {
  moodIds: Array<Scalars['ID']['input']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  count: Scalars['Int']['output'];
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  mood: Mood;
  moods: MoodsResults;
};


export type QueryMoodArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMoodsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type Word = {
  __typename?: 'Word';
  definitions: Array<Scalars['String']['output']>;
  partOfSpeech: Scalars['String']['output'];
  pronunciation: Scalars['String']['output'];
};

export type SaveCurrentMoodsMutationVariables = Exact<{
  moodIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type SaveCurrentMoodsMutation = { __typename?: 'Mutation', saveCurrentMood: Array<{ __typename?: 'Mood', id: string, title: string, description: string, emoji: string, word?: { __typename?: 'Word', pronunciation: string, definitions: Array<string>, partOfSpeech: string } | null }> };

export type AllMoodsQueryVariables = Exact<{
  skip: Scalars['Int']['input'];
  limit: Scalars['Int']['input'];
  search: Scalars['String']['input'];
}>;


export type AllMoodsQuery = { __typename?: 'Query', moods: { __typename?: 'MoodsResults', moods: Array<{ __typename?: 'Mood', description: string, emoji: string, id: string, title: string }>, pagination: { __typename?: 'Pagination', count: number, limit: number, skip: number } } };

export type MoodByIdQueryVariables = Exact<{
  moodId: Scalars['ID']['input'];
}>;


export type MoodByIdQuery = { __typename?: 'Query', mood: { __typename?: 'Mood', id: string, title: string, description: string, emoji: string, word?: { __typename?: 'Word', pronunciation: string, definitions: Array<string>, partOfSpeech: string } | null } };


export const SaveCurrentMoodsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SaveCurrentMoods"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"moodIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"saveCurrentMood"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"moodIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"moodIds"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}},{"kind":"Field","name":{"kind":"Name","value":"word"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pronunciation"}},{"kind":"Field","name":{"kind":"Name","value":"definitions"}},{"kind":"Field","name":{"kind":"Name","value":"partOfSpeech"}}]}}]}}]}}]} as unknown as DocumentNode<SaveCurrentMoodsMutation, SaveCurrentMoodsMutationVariables>;
export const AllMoodsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllMoods"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"moods"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"moods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"skip"}}]}}]}}]}}]} as unknown as DocumentNode<AllMoodsQuery, AllMoodsQueryVariables>;
export const MoodByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MoodById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"moodId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mood"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"moodId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}},{"kind":"Field","name":{"kind":"Name","value":"word"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pronunciation"}},{"kind":"Field","name":{"kind":"Name","value":"definitions"}},{"kind":"Field","name":{"kind":"Name","value":"partOfSpeech"}}]}}]}}]}}]} as unknown as DocumentNode<MoodByIdQuery, MoodByIdQueryVariables>;