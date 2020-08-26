import Styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

import { colors } from "../../../constants/colors";

export const Container = Styled.View`
    flex: 1;
`;

export const Title = Styled.Text`
    font-size: 22px;
    color: ${colors.primary};
    font-weight: 600;
    text-align: center;
    margin-top: 20px;
`;

export const Content = Styled.View`
    margin-left: 15px;
`;

export const Label = Styled.Text`
    font-size: 14px;
    font-weight: 600;
    color: ${colors.primary};
    margin-top: 20px;
`;

export const Input = Styled.TextInput.attrs({
  placeholderTextColor: "#9E9E9E",
})`
    height: 40px;
    width: 328px;
    border-width: 1px;
    border-color: ${colors.borderColor};
    padding-left: 10px;
    margin-top: 2px;
`;

export const ButtonSave = Styled(RectButton)`
    height: 40px;
    width: 328px;
    background-color: ${colors.primary};
    justify-content: center;
    align-items: center;
    margin-top: 35px;
    align-self: center;
`;

export const ButtonSaveText = Styled.Text`
    font-size: 14px;
    line-height: 24px;
    font-weight: 600;
    color: ${colors.white};
`;
