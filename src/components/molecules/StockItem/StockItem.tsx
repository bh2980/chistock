import StockLogo from "@molecules/StockLogo/StockLogo";

import Divider from "@atoms/Divider/Divider";
import Text from "@atoms/Text";

import StockChangeLabel from "../StockChangeLabel";
import StockPrice from "../StockPrice";
import { stockItemVariants } from "./StockItem.styles";
import { StockItemProps } from "./StockItem.types";
import { useStockItem } from "./useStockItem";

const StockItem = (props: StockItemProps) => {
  const { companyName, ticker } = props;

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
  } = stockItemVariants({ tickerAccent, size });

  return (
    <div className={root()}>
      <div className={stockInfoContainer()}>
        <StockLogo src={src} alt={`${companyName} logo`} ticker={ticker} className={stockLogo()} />
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
