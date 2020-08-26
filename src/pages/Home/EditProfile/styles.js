import Styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { scale, moderateScale } from "react-native-size-matters";

import { colors } from "../../../constants/colors";

export const Container = Styled.View`
    flex: 1;
`;

export const Title = Styled.Text`
    font-size: ${scale(22)}px;
    color: ${colors.primary};
    font-family: Montserrat-SemiBold;
    text-align: center;
    margin-top: ${scale(20)}px;
`;

export const Content = Styled.View`
    align-self: center;
`;

export const Label = Styled.Text`
    font-size: ${scale(14)}px;
    font-family: Montserrat-SemiBold;
    color: ${colors.primary};
    margin-top: ${scale(20)}px;
`;

export const Input = Styled.TextInput.attrs({
  placeholderTextColor: "#9E9E9E",
})`
    height: ${scale(40)}px;
    width: ${scale(328)}px;
    border-width: 1px;
    border-color: ${colors.borderColor};
    padding-left: ${moderateScale(10)}px;
    margin-top: ${scale(2)}px;
    font-family: Montserrat-Regular;
`;

export const ButtonSave = Styled(RectButton)`
    height: ${scale(40)}px;
    width: ${scale(328)}px;
    background-color: ${colors.primary};
    justify-content: center;
    align-items: center;
    margin-top: ${scale(35)}px;
    align-self: center;
    margin-bottom: ${scale(20)}px;
`;

export const ButtonSaveText = Styled.Text`
    font-size:  ${scale(14)}px;
    line-height: ${scale(24)}px;
    font-family: Montserrat-SemiBold;
    color: ${colors.white};
`;
