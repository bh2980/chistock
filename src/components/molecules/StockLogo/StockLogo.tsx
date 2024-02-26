import { useState } from "react";

import { tv } from "@utils/customTV";

import Image, { type ImagePropsType } from "@atoms/Image";
import Text from "@atoms/Text";

type StockLogoProps = Omit<ImagePropsType, "src"> & {
  src?: string;
  ticker: string;
};

const StockLogoVariants = tv({
  base: "flex justify-center items-center rounded-circle bg-secondary text-secondary-on overflow-hidden",
});

const StockLogo = ({ src, alt, ticker, className, ...imageProps }: StockLogoProps) => {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div className={StockLogoVariants({ className })} title={alt}>
      {(!src || hasError) && <Text bold>{ticker}</Text>}
      {src && (
        <Image
          src={src}
          alt={alt}
          className={`w-full h-full ${hasError ? "hidden" : "block"}`}
          onError={handleError}
          {...imageProps}
        />
      )}
    </div>
  );
};

export default StockLogo;
