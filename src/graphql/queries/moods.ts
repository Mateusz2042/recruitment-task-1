import { gql } from "@apollo/client";

export const ALL_MOODS = gql`
  query AllMoods($skip: Int!, $limit: Int!, $search: String!) {
    moods(skip: $skip, limit: $limit, search: $search) {
      moods {
        description
        emoji
        id
        title
      }
      pagination {
        count
        limit
        skip
      }
    }
  }
`

export const MOOD_BY_ID = gql`
  query MoodById($moodId: ID!) {
    mood(id: $moodId) {
      id
      title
      description
      emoji
      word {
        pronunciation
        definitions
        partOfSpeech
      }
    }
  }
`
