import Styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { scale } from "react-native-size-matters";

import { colors } from "../../../constants/colors";

export const Container = Styled.View`
    flex: 1;
`;

export const HeaderButton = Styled.View`
    flex-direction: row;
    margin-top: ${scale(25)}px;
    justify-content: space-between;
    margin-left: ${scale(15)}px;
    margin-right: ${scale(15)}px;
`;

export const TitleNavers = Styled.Text`
    font-size:  ${scale(22)}px;
    color: ${colors.primary};
    line-height: ${scale(32)}px;
    font-family: Montserrat-SemiBold
`;

export const ButtonAddNave = Styled(RectButton)`
    height: ${scale(40)}px;
    width: ${scale(155)}px;
    background-color: ${colors.primary};
    justify-content: center;
    align-items: center;
`;

export const ButtonAddNaveText = Styled.Text`
    color: ${colors.white};
    font-size: ${scale(14)}px;
    line-height: ${scale(24)}px;
    font-family: Montserrat-SemiBold
`;

export const ListViewContent = Styled.View`
    height: ${scale(234)}px;
    width: ${scale(156.56)}px;
    margin-left: ${scale(12)}px;
    margin-top: ${scale(30)}px;
`;

export const ImageView = Styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
    height: ${scale(170)}px;
    width: ${scale(156.56)}px;
    background: #ccc;
`;

export const ImageV = Styled.Image`
    width: 100%;
    height: 100%;
`;

export const ListViewContentText = Styled.Text`
    font-size: ${scale(14)}px;
    color: ${colors.primary};
    line-height: ${scale(20)}px;
    font-family: Montserrat-SemiBold
`;

export const ListViewContentTextSubTitle = Styled.Text`
    font-size: ${scale(12)}px;
    color: ${colors.primary};
    font-weight: normal;
    line-height: ${scale(16)}px;
    /* margin-top: ${scale(2)}px; */
    font-family: Montserrat-Regular
`;

export const GroupButton = Styled.View`
    flex-direction: row;
    margin-top: ${scale(5)}px;
`;

export const ButtonRemove = Styled(RectButton)`
    height: ${scale(25)}px;
    width: ${scale(25)}px;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    
`;

export const ButtonEdit = Styled(RectButton)`
    height: ${scale(25)}px;
    width: ${scale(25)}px;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
`;

export const Indicator = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
