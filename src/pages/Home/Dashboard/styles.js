import Styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

import { colors } from '../../../constants/colors'

export const Container = Styled.View`
    flex: 1;
`;

export const HeaderButton = Styled.View`
    flex-direction: row;
    margin-top: 25px;
    justify-content: space-between;
    margin-left: 15px;
    margin-right: 15px;
`;

export const TitleNavers = Styled.Text`
    font-size: 22px;
    font-weight: 600;
    color: ${colors.primary};
    line-height: 32px;
`;

export const ButtonAddNave = Styled(RectButton)`
    height: 40px;
    width: 155px;
    background-color: ${colors.primary};
    justify-content: center;
    align-items: center;
`;

export const ButtonAddNaveText = Styled.Text`
    color: ${colors.white};
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
`;

export const ListViewContent = Styled.View`
    height: 234px;
    width: 156.56px;
    margin-left: 16px;
    margin-top: 30px;
`;

export const ImageView = Styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
    height: 170px;
    width: 156.56px;
    background: #ccc;
`;

export const ImageV = Styled.Image`
    width: 100%;
    height: 100%;
`;

export const ListViewContentText = Styled.Text`
    font-size: 14px;
    color: ${colors.primary};
    font-weight: 600;
    line-height: 20px;
`;

export const ListViewContentTextSubTitle = Styled.Text`
    font-size: 14px;
    color: ${colors.primary};
    font-weight: normal;
    line-height: 16px;
`;

export const GroupButton = Styled.View`
    flex-direction: row;
    margin-top: 5px;
`;

export const ButtonRemove = Styled(RectButton)`
    height: 25px;
    width: 25px;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    
`;

export const ButtonEdit = Styled(RectButton)`
    height: 25px;
    width: 25px;
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
