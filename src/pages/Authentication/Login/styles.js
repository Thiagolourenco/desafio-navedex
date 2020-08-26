import Styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

import { colors } from "../../../constants/colors";

export const Container = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const InputContent = Styled.View`
    margin-top:${scale(10)}px;
`;

export const Label = Styled.Text`
    font-size: ${scale(14)}px;
    line-height: 18px;
    color:${colors.primary};
    margin-top: ${scale(30)}px;
    font-family: Montserrat-SemiBold

`;

export const Input = Styled.TextInput.attrs({
  placeholderTextColor: "#ccc",
})`
  height: ${scale(40)}px;
  width:${scale(328)}px;
  border-width: 1px;
  border-color: ${colors.borderColor};
  padding-left: ${moderateScale(10)}px;
  margin-top: ${scale(5)}px;
  font-family: Montserrat-Regular; 
`;

export const ButtonLogin = Styled(RectButton)`
    height: ${scale(40)}px;
    width:${scale(328)}px;
    background-color: ${colors.primary};
    justify-content: center;
    align-items: center;
    margin-top: ${scale(40)}px;
`;

export const ButtonLoginText = Styled.Text`
    font-size: ${scale(14)}px;
    line-height: 24px;
    color: ${colors.white};
    font-family: Montserrat-SemiBold

`;
