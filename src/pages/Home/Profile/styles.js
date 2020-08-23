import Styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = Styled.View`
    flex: 1;
`;

export const Content = Styled.View`
    margin-top: 20px;
    margin-left: 15px;
`;

export const ImageProfile = Styled.View`
    height: 280px;
    width: 100%;
    background: #ccc;
`;

export const TextName = Styled.Text`
    font-size: 22px;
    font-weight: 600;
    line-height: 32px;
    color: #212121;
`;

export const TextData = Styled.Text`
    font-size: 16px;
    color: #212121;
    font-weight: 600;
    line-height: 24px;
    margin-top: 20

`;

export const TextValues = Styled.Text`
    font-size: 16px;
    color: #212121;
    line-height: 24px;
`;

export const GroupButton = Styled.View`
 flex-direction: row;
    align-self: center;
    margin-top: 35px;
`;

export const ButtonCancel = Styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
      height: 40px;
      width: 156px;
      /* border: 5px solid #212121; */
      border-width: 1px;
      border-color: #424242;
      justify-content: center;
      align-items: center;
      margin-right: 8px;
      flex-direction: row;
   `;

export const ButtonCancelText = Styled.Text`
      font-size: 14px;
      color: #212121;
      font-weight: 600;
      margin-left: 8px;

  `;

export const ButtonEdit = Styled(RectButton)`
      height: 40px;
      width: 158px;
      background-color: #212121;
      justify-content: center;
      align-items: center;
      margin-left: 8px;
      flex-direction: row;

  `;

export const ButtonEditText = Styled.Text`
      font-size: 14px;
      color: #fff;
      font-weight: 600;
      margin-left: 8px;
  `;
