import Styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const ButtonItem = Styled(RectButton)`
  height: 40px;
  width: 230px;
  border-radius: 10px;
  margin-top: 10;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-width: 0.1;
  border-color: #eee;
  flex-direction: row;
`;

export const ButtonItemText = Styled.Text`
  font-size: 22px;
  color: #212121;
  font-weight: 600;
  text-align: center;
`;
