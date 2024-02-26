import type { NewsItemProps } from "@molecules/NewsItem";

import { getRelativeTime } from "@utils/getRelativeTime";

import Image from "@atoms/Image";
import List from "@atoms/List/List";
import Text from "@atoms/Text";

type ImageNewsItmeProps = NewsItemProps & { src: string };

const ImageNewsItem = ({
  src,
  category,
  source,
  timestamp,
  title,
  summary,
}: ImageNewsItmeProps) => {
  return (
    <div className="relative w-[320rem] h-[560rem] rounded-m overflow-hidden">
      <Image className="absolute w-full h-full" src={src} alt={`Image for ${title}`} />
      <div className="absolute bottom-0 flex flex-col gap-xs p-xl bg-surface-inverse/90">
        <div className="flex gap-s">
          <Text color="primaryInverse" size="body2" className="capitalize" bold>
            {category}
          </Text>
          <List divider={"•"} className="gap-2xs" horizontal>
            <Text size="body2" color="onSurfaceVariantInverse">
              {source}
            </Text>
            <Text size="body2" color="onSurfaceVariantInverse">
              {getRelativeTime(timestamp)}
            </Text>
          </List>
        </div>
        <Text size="headline3" color="onSurfaceInverse" className="line-clamp-1" bold>
          {title}
        </Text>
        <Text size="body1" color="onSurfaceVariantInverse" className="line-clamp-1">
          {summary}
        </Text>
      </div>
    </div>
  );
};

export default ImageNewsItem;
