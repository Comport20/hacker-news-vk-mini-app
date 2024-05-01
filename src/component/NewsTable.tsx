import { useQuery } from "@tanstack/react-query";
import { TableCell } from "./TableCell";
import { getNewStories } from "../api/apiHackerNews";
import { SimpleCell } from "@vkontakte/vkui";
import { Fragment } from "react/jsx-runtime";

export const NewsTable = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["getNewStories"],
    queryFn: getNewStories,
    refetchInterval: 1000 * 60,
  });
  if (isLoading) {
    return <SimpleCell>Загрузка...</SimpleCell>;
  } else if (error) {
    return <SimpleCell>Ошибка</SimpleCell>;
  }
  if (data) {
    return data.map((storyId) => (
      <Fragment key={storyId}>
        <TableCell storyId={storyId} />
      </Fragment>
    ));
  }
};
