import Styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

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
    color: #212121;
    line-height: 32px;
`;

export const ButtonAddNave = Styled(RectButton)`
    height: 40px;
    width: 155px;
    background-color: #212121;
    justify-content: center;
    align-items: center;
`;

export const ButtonAddNaveText = Styled.Text`
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
`;

export const ListViewContent = Styled.View`
    height: 234px;
    width: 156.56px;
    /* background: #ccc; */
    margin-left: 16px;
    margin-top: 30px;
`;

export const ImageView = Styled.View`
 height: 170;
    width: 156.56px;
    background: #ccc;
    /* margin-left: 16px;
    margin-top: 30px; */
`;

export const ListViewContentText = Styled.Text`
    font-size: 14px;
    color: #212121;
    font-weight: 600;
    line-height: 20px;
`;

export const ListViewContentTextSubTitle = Styled.Text`
    font-size: 14px;
    color: #212121;
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
    border-radius: 15;
    justify-content: center;
    align-items: center;
    
`;

export const ButtonEdit = Styled(RectButton)`
    height: 25px;
    width: 25px;
    border-radius: 15;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
`;
