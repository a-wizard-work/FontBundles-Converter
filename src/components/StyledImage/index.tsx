import { FC, useEffect, useState } from "react";
import styled from "styled-components";

export const StyledImg = styled.img<{
  borderRadius?: string;
  boxShadow?: string;
}>`
  width: 100%;
  object-position: 50% 40%;
  object-fit: cover;
  transition: opacity 1s ease-in-out;
  display: block;
  ${(props) =>
    props.borderRadius ? `border-radius: ${props.borderRadius};` : ""}
  ${(props) => (props.boxShadow ? `box-shadow: ${props.boxShadow};` : "")}
`;

interface IProps {
  src: string;
  borderRadius?: string;
  height?: number;
  alt?: string;
  fallbackSrc?: string;
  boxShadow?: string;
  loading?: "eager" | "lazy";
}

const StyledImage: FC<IProps> = ({
  src,
  borderRadius,
  height,
  alt,
  fallbackSrc,
  boxShadow,
  loading,
}) => {
  const [imgSrc, setImgSrc] = useState<string>(src);
  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <StyledImg
      src={imgSrc}
      borderRadius={borderRadius}
      height={height}
      alt={alt}
      boxShadow={boxShadow}
      onError={() => {
        if (fallbackSrc && imgSrc !== fallbackSrc) {
          setImgSrc(fallbackSrc);
        }
      }}
      loading={loading}
    />
  );
};

export default StyledImage;
