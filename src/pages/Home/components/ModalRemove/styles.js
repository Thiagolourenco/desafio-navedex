import Styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

import { colors } from "../../../../constants/colors";

export const Container = Styled.View`
    flex: 1;
    background-color: rgba(0,0,0,0.7);
    justify-content: center;
    align-items: center;
`;

export const Content = Styled.View`
    height: 208px;
    width: 328px;
    background-color: ${colors.white};
    box-shadow: 0px 2px 4px rgba(33, 33, 33, 0.25);
`;

export const ContentHeader = Styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    margin-left: 23px;
    margin-right: 22px;
`;

export const ContentHeaderTitle = Styled.Text`
    font-size: 22px;
    font-weight: 900;
    line-height: 32px;
    color: ${colors.primary};
`;

export const ContentValues = Styled.Text`
    font-size: 16px;
    color: ${colors.primary};
    width: 279px;
    align-self: center;
    margin-top: 20px;    

`;

export const ButtonGroupModal = Styled.View`
    flex-direction: row;
    align-self: center;
    margin-top: 35px;
`;

export const ButtonCancel = Styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
    height: 40px;
    width: 132px;
    border-width: 1px;
    border-color: ${colors.borderColor};
    justify-content: center;
    align-items: center;
    margin-right: 8px;

    `;

export const ButtonCancelText = Styled.Text`
    font-size: 14px;
    color: ${colors.primary};
    font-weight: 600;
`;

export const ButtonRemove = Styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
    height: 40px;
    width: 132px;
    background-color: ${colors.primary};
    justify-content: center;
    align-items: center;
    margin-left: 8px;
`;

export const ButtonRemoveText = Styled.Text`
    font-size: 14px;
    color: ${colors.white};
    font-weight: 600;
`;
