import Styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { scale } from "react-native-size-matters";

import { colors } from "../../../constants/colors";

export const Container = Styled.View`
    flex: 1;
`;

export const Content = Styled.View`
    margin-top: ${scale(20)}px;
    margin-left: ${scale(15)}px;
`;

export const ImageProfile = Styled.Image`
    height: ${scale(280)}px;
    width: 100%;
    background: #ccc;
`;

export const TextName = Styled.Text`
    font-size: ${scale(22)}px;
    font-weight: 600;
    line-height: ${scale(32)}px;
    color: ${colors.primary};
`;

export const TextData = Styled.Text`
    font-size: ${scale(16)}px;
    color: ${colors.primary};
    font-weight: 600;
    line-height: ${scale(24)}px;
    margin-top: ${scale(15)}px;

`;

export const TextValues = Styled.Text`
    font-size: ${scale(16)}px;
    color:${colors.primary};
    line-height: ${scale(24)}px;
`;

export const GroupButton = Styled.View`
    flex-direction: row;
    align-self: center;
    margin-top: ${scale(25)}px;
    margin-bottom: ${scale(20)}px;
`;

export const ButtonCancel = Styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
      height: ${scale(40)}px;
      width: ${scale(156)}px;
      /* border: 5px solid #212121; */
      border-width: 1px;
      border-color: ${colors.borderColor};
      justify-content: center;
      align-items: center;
      margin-right: ${scale(8)}px;
      flex-direction: row;
   `;

export const ButtonCancelText = Styled.Text`
      font-size: ${scale(14)}px;
      color: ${colors.primary};
      font-weight: 600;
      margin-left: ${scale(8)}px;

  `;

export const ButtonEdit = Styled(RectButton)`
      height: ${scale(40)}px;
      width: ${scale(158)}px;
      background-color: ${colors.primary};
      justify-content: center;
      align-items: center;
      margin-left: ${scale(8)}px;
      flex-direction: row;

  `;

export const ButtonEditText = Styled.Text`
      font-size: ${scale(14)}px;
      color: ${colors.white};
      font-weight: 600;
      margin-left: ${scale(8)}px;
  `;

export const Indicator = Styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;
`;
