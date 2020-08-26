import Styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { scale } from 'react-native-size-matters'

import { colors } from "../../../../constants/colors";

export const Container = Styled.View`
    flex: 1;
    background-color: rgba(0,0,0,0.7);
    justify-content: center;
    align-items: center;
`;

export const Content = Styled.View`
    height: ${scale(208)}px;
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
    font-family: Montserrat-SemiBold;
    line-height: ${scale(32)}px;
    color: ${colors.primary};
`;

export const ContentValues = Styled.Text`
    font-size: ${scale(16)}px;
    color: ${colors.primary};
    width: ${scale(279)}px;
    align-self: center;
    margin-top: ${scale(20)}px;    
    font-family: Montserrat-SemiBold;

`;

export const ButtonGroupModal = Styled.View`
    flex-direction: row;
    align-self: center;
    margin-top: ${scale(35)}px;
`;

export const ButtonCancel = Styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
    height: ${scale(40)}px;
    width: ${scale(132)}px;
    border-width: 1px;
    border-color: ${colors.borderColor};
    justify-content: center;
    align-items: center;
    margin-right: ${scale(8)}px;

    `;

export const ButtonCancelText = Styled.Text`
    font-size: ${scale(14)}px;
    color: ${colors.primary};
    font-family: Montserrat-SemiBold;
`;

export const ButtonRemove = Styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
    height: ${scale(40)}px;
    width: ${scale(132)}px;
    background-color: ${colors.primary};
    justify-content: center;
    align-items: center;
    margin-left: ${scale(8)}px;
`;

export const ButtonRemoveText = Styled.Text`
    font-size: ${scale(14)}px;
    color: ${colors.white};
    font-family: Montserrat-SemiBold;
`;
