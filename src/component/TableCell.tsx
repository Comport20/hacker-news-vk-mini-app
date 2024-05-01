// import { useState } from "react";
// import Story from "../type";
import { useQuery } from "@tanstack/react-query";
import { getNewStory } from "../api/apiHackerNews";
import {
  Group,
  HorizontalCell,
  Cell,
  Separator,
  Spacing,
} from "@vkontakte/vkui";

interface TableCellProps {
  storyId: number;
}
export const TableCell = ({ storyId }: TableCellProps) => {
  // const [story, setStory] = useState<Story>({
  //   by: "",
  //   descendants: 0,
  //   id: 0,
  //   score: 0,
  //   time: 0,
  //   title: "",
  //   type: "",
  //   url: "",
  // });
  const { data } = useQuery({
    queryKey: ["getNewStory", storyId],
    queryFn: () => getNewStory(storyId),
  });
  return (
    <Group>
      <Cell>{data?.title}</Cell>
      <Spacing size={4}>
        <Separator />
      </Spacing>
      <Cell>
        <HorizontalCell size="s">{data?.score}</HorizontalCell>
        <HorizontalCell size="s">{data?.time}</HorizontalCell>
        <HorizontalCell size="s">{data?.by}</HorizontalCell>
      </Cell>
    </Group>
  );
};
