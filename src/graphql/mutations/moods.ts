import { gql } from "@apollo/client";

export const SEND_MOODS = gql`
  mutation SaveCurrentMoods($moodIds: [ID!]!) {
    saveCurrentMood(moodIds: $moodIds) {
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
