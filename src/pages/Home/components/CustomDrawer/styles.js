import Styled from "styled-components/native";
import { scale } from "react-native-size-matters";

import { colors } from "../../../../constants/colors";

export const Container = Styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const Header = Styled.View`
  flex: 0.4;
  height: ${scale(100)}px;
  width: ${scale(100)}px;
`;

export const Content = Styled.View`
  flex: 0.1;
  background-color: ${colors.white};
  width: 100%;
  align-items: center;

`;
