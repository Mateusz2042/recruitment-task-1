import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { MOOD_BY_ID } from "../graphql/queries/moods";
import { Details } from "../ui";
import { MoodByIdQuery, MoodByIdQueryVariables, Word } from "../graphql/gql-types/graphql";

export function MoodDetails() {
  const { moodId } = useParams();
  const { data } = useQuery<MoodByIdQuery, MoodByIdQueryVariables>(MOOD_BY_ID, {
    variables: { moodId: moodId || '' },
    skip: !moodId,
  });

  return (
    <Details
      title={data?.mood.title}
      description={data?.mood.description}
      emoji={data?.mood.emoji}
      word={data?.mood.word as Word}
    />
  );
}

export default MoodDetails;
