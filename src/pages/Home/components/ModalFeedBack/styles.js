import Styled from "styled-components/native";
import { scale } from "react-native-size-matters";

import { colors } from "../../../../constants/colors";

export const Container = Styled.View`
    flex: 1;
    background-color: rgba(0,0,0,0.7);
    justify-content: center;
    align-items: center;
`;

export const Content = Styled.View`
    height: ${scale(112)}px;
    width: ${scale(328)}px;
    background-color: ${colors.white};
    box-shadow: 0px 2px 4px rgba(33, 33, 33, 0.25);
`;

export const ContentHeader = Styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: ${scale(10)}px;
    margin-left: ${scale(23)}px;
    margin-right: ${scale(22)}px;
`;

export const ContentHeaderTitle = Styled.Text`
    font-size: ${scale(22)}px;
    font-weight: 900;
    line-height: ${scale(32)}px;
    color: ${colors.primary};
`;

export const ContentValues = Styled.Text`
    font-size: ${scale(16)}px;
    color: ${colors.primary};
    width: ${scale(279)}px;
    align-self: center;
    margin-top: ${scale(15)}px;    
`;
