import Styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

import { colors } from "../../../../constants/colors";

export const ButtonItem = Styled(RectButton)`
  height: 40px;
  width: 230px;
  border-radius: 10px;
  margin-top: 10px;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-width: 0.1px;
  border-color: #eee;
  flex-direction: row;
`;

export const ButtonItemText = Styled.Text`
  font-size: 22px;
  color: ${colors.primary};
  font-weight: 600;
  text-align: center;
`;
