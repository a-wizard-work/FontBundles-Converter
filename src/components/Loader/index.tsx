import { FC } from "react";
import { Box, BoxProps } from "react-basic-blocks";
import BeatLoader from "react-spinners/BeatLoader";

type Props = BoxProps & {
  size?: number;
  color?: string;
};

const Loader: FC<Props> = ({ size = 20, color, ...props }) => (
  <Box padding="20px" alignItems="center" justifyContent="center" {...props}>
    <BeatLoader loading size={size} color="grey" />
  </Box>
);

export default Loader;
