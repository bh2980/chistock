import Divider from "@atoms/Divider/Divider";
import Image from "@atoms/Image/Image";
import Text from "@atoms/Text";

import StockChangeLabel from "../StockChangeLabel";
import StockPrice from "../StockPrice";
import { stockInfoItemVariants } from "./StockItem.styles";
import { StockInfoItemProps } from "./StockItem.types";
import { useStockItem } from "./useStockItem";

const StockItem = (props: StockInfoItemProps) => {
  const {
    src,
    title,
    subtitle,
    market,
    currentPrice,
    change,
    changePercentage,
    tickerAccent,
    size,
    stockPriceSize,
    stockChangeLabelSize,
  } = useStockItem(props);

  const {
    root,
    stockInfoContainer,
    stockPriceContainer,
    stockTextContainer,
    subtitleContainer,
    stockLogo,
    titleText,
    subtitleText,
    marketText,
    tickerMarketDivider,
  } = stockInfoItemVariants({ tickerAccent, size });

  return (
    <div className={root()}>
      <div className={stockInfoContainer()}>
        {/** //TODO stockLogo로 change */}
        {src && <Image src={src} alt={`logo image`} className={stockLogo()} />}
        <div className={stockTextContainer()}>
          <Text className={titleText()}>{title}</Text>
          <div className={subtitleContainer()}>
            <Text className={subtitleText()}>{subtitle}</Text>
            {market && (
              <>
                <Divider vertical className={tickerMarketDivider()} />
                <Text className={marketText()}>{market}</Text>
              </>
            )}
          </div>
        </div>
      </div>
      <div className={stockPriceContainer()}>
        <StockPrice price={currentPrice} prefix="$ " decimalPoint={2} size={stockPriceSize} />
        <StockChangeLabel
          change={change}
          changePercentage={changePercentage}
          size={stockChangeLabelSize}
        />
      </div>
    </div>
  );
};

export default StockItem;
