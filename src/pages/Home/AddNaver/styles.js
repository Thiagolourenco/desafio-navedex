import Styled from "styled-components/native";

import { RectButton } from "react-native-gesture-handler";

export const Container = Styled.View`
    flex: 1;
`;

export const Title = Styled.Text`
    font-size: 22px;
    color: #212121;
    font-weight: 600;
    text-align: center;
    margin-top: 20px;
`;

export const Content = Styled.View`
    margin-left: 15px;
    /* margin-top: 5px; */
`;

export const Label = Styled.Text`
    font-size: 14px;
    font-weight: 600;
    color: #212121;
    margin-top: 20px;
`;

export const Input = Styled.TextInput.attrs({
  placeholderTextColor: "#9E9E9E",
})`
    height: 40px;
    width: 328px;
    border-width: 1px;
    border-color: #424242;
    padding-left: 10px;
    margin-top: 2px;
`;

export const ButtonSave = Styled(RectButton)`
    height: 40px;
    width: 328px;
    background-color: #212121;
    justify-content: center;
    align-items: center;
    margin-top: 35px;
    align-self: center;
`;

export const ButtonSaveText = Styled.Text`
    font-size: 14px;
    line-height: 24px;
    font-weight: 600;
    color: #ffffff;
`;
