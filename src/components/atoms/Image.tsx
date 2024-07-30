import type { HTMLAttributes } from "react";

type ImageProps = {
  src: string;
  alt?: string;
  style?: React.CSSProperties;
};

const Image = (props: ImageProps) => {
  const { src, alt, style } = props;
  return <img src={src} alt={alt} style={style} loading="lazy" />;
};

export default Image;
