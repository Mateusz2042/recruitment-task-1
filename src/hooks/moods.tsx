import { useMutation, useQuery } from "@apollo/client"
import { ALL_MOODS } from "../graphql/queries/moods"
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import debounce from "lodash.debounce";
import { MoodListItem, SaveCurrentMoodVariables } from "../types/graphql";
import { Card, NoResults } from "../ui";
import { SEND_MOODS } from "../graphql/mutations/moods";
import { AllMoodsQuery, AllMoodsQueryVariables, Mood, SaveCurrentMoodsMutation } from "../graphql/gql-types/graphql";

export const useGetMoods = () => {
  const [search, setSearch] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [skip, setSkip] = useState<number>(0);
  const [limit, setLimit] = useState<number>(3);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [moodList, setMoodList] = useState<MoodListItem[]>([]);
  const [sendCurrentMoods] = useMutation<SaveCurrentMoodsMutation, SaveCurrentMoodVariables>(SEND_MOODS);
  const { data, loading } = useQuery<AllMoodsQuery, AllMoodsQueryVariables>(ALL_MOODS, {
    variables: { skip, limit, search: searchQuery }
  });

  useEffect(() => {
    if (data?.moods) {
      setMoodList(data.moods.moods.map((mod: Mood) => ({
        id: mod.id,
        title: mod.title,
        description: mod.description,
        emoji: mod.emoji,
      })));
    }
  }, [data]);

  const handleSearchUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    handleUpdateSearchDebounce(event.target.value);
  }

  const handleUpdateSearchDebounce = useRef(
    debounce(async (val: string) => {
      setSearchQuery(val);
      setSkip(0);
      setLimit(3);
    }, 300),
  ).current;

  const handleNext = useCallback(() => {
    setSkip(skip + 3);
    setLimit(limit + 3);
  }, [skip, limit]);

  const handlePrevious = useCallback(() => {
    setSkip(skip - 3);
    setLimit(limit - 3);
  }, [skip, limit]);

  const handleMoodSelect = useCallback((event?: React.MouseEvent<HTMLButtonElement>) => {
    if (event) {
      const listTemp = [...selectedIds];
      const foundIndex = listTemp.findIndex((id: string) => id === event.currentTarget.id);
    
      if (foundIndex !== -1) listTemp.splice(foundIndex, 1)
      else {
        if (selectedIds.length < 3) {
          listTemp.push(event.currentTarget.id)
        } else {
          alert(`You can't choose more than 3 moods.`);
        }
      }

      setSelectedIds(listTemp);
    }
  }, [selectedIds]);

  const moodsResult = useMemo(() => {
    if (!loading) {
      return moodList.length ? <>{moodList.map((mood: MoodListItem) => <Card
        key={mood.id}
        title={mood.title}
        description={mood.description}
        emoji={mood.emoji}
        id={mood.id}
        isSelected={!!selectedIds.find(x => x === mood.id)}
        onSelect={handleMoodSelect}
      />)}</> : <NoResults />;
    }
  }, [moodList, selectedIds, loading, handleMoodSelect]);

  const nextPageDisabled = useMemo(() => {
    if (data?.moods.pagination) return data.moods.pagination.limit >= data.moods.pagination.count;
    return true;
  }, [data])

  const previousPageDisabled = useMemo(() => !data?.moods.pagination.skip, [data])

  const count = useMemo(() => data?.moods.pagination.count, [data])

  const sendMoods = useCallback(() => {
    sendCurrentMoods({
      variables: { moodIds: selectedIds },
      onCompleted: () => {
        setSelectedIds([]);
        alert('SUCCESS');
      }
    })
  }, [selectedIds, sendCurrentMoods])

  return {
    handleSearchUpdate,
    handleNext,
    handlePrevious,
    sendMoods,
    moodsResult,
    search,
    data,
    nextPageDisabled,
    previousPageDisabled,
    count,
  }
}
