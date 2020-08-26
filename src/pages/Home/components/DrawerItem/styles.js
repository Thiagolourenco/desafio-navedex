import Styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { scale } from "react-native-size-matters";

import { colors } from "../../../../constants/colors";

export const ButtonItem = Styled(RectButton)`
  height: ${scale(40)}px;
  width: ${scale(230)}px;
  border-radius: 10px;
  margin-top: ${scale(10)}px;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-width: 0.1px;
  border-color: #eee;
  flex-direction: row;
`;

export const ButtonItemText = Styled.Text`
  font-size: ${scale(22)}px;
  color: ${colors.primary};
  font-weight: 600;
  text-align: center;
`;
