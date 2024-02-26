import { getRelativeTime } from "@utils/getRelativeTime";

import List from "@atoms/List/List";
import Text from "@atoms/Text";

import { NewsItemProps } from "./NewsItem.type";

const NewsItem = ({ category, source, timestamp, title, summary }: NewsItemProps) => {
  return (
    <div className="flex flex-col gap-xs">
      <div className="flex gap-s">
        <Text color="primary" size="body2" className="capitalize" bold>
          {category}
        </Text>
        <List divider={"•"} className="gap-2xs" horizontal>
          <Text size="body2" color="onSurfaceVariant">
            {source}
          </Text>
          <Text size="body2" color="onSurfaceVariant">
            {getRelativeTime(timestamp)}
          </Text>
        </List>
      </div>
      <Text size="headline3" color="onSurface" className="line-clamp-1" bold>
        {title}
      </Text>
      <Text size="body1" color="onSurfaceVariant" className="line-clamp-1">
        {summary}
      </Text>
    </div>
  );
};

export default NewsItem;
