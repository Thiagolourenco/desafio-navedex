import Styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const InputContent = Styled.View`
    margin-top: 10px;
`;

export const Label = Styled.Text`
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    color: #212121;
    margin-top: 30px;
    /* font-family: Montserrat-Regular; */

`;

export const Input = Styled.TextInput.attrs({
  placeholderTextColor: "#ccc",
})`
  height: 40px;
  width: 328px;
  border-width: 1px;
  border-color: #424242;
  padding-left: 10px;
  margin-top: 5px;
`;

export const ButtonLogin = Styled(RectButton)`
    height: 40px;
    width: 328px;
    background-color: #212121;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`;

export const ButtonLoginText = Styled.Text`
    font-size: 14px;
    line-height: 24px;
    font-weight: 600;
    color: #ffffff;
`;
