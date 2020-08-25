import Styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

import { colors } from '../../../constants/colors'

export const Container = Styled.View`
    flex: 1;
`;

export const Content = Styled.View`
    margin-top: 20px;
    margin-left: 15px;
`;

export const ImageProfile = Styled.Image`
    height: 280px;
    width: 100%;
    background: #ccc;
`;

export const TextName = Styled.Text`
    font-size: 22px;
    font-weight: 600;
    line-height: 32px;
    color: ${colors.primary};
`;

export const TextData = Styled.Text`
    font-size: 16px;
    color: ${colors.primary};
    font-weight: 600;
    line-height: 24px;
    margin-top: 20px;

`;

export const TextValues = Styled.Text`
    font-size: 16px;
    color:${colors.primary};
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
      border-color: ${colors.borderColor};
      justify-content: center;
      align-items: center;
      margin-right: 8px;
      flex-direction: row;
   `;

export const ButtonCancelText = Styled.Text`
      font-size: 14px;
      color: ${colors.primary};
      font-weight: 600;
      margin-left: 8px;

  `;

export const ButtonEdit = Styled(RectButton)`
      height: 40px;
      width: 158px;
      background-color: ${colors.primary};
      justify-content: center;
      align-items: center;
      margin-left: 8px;
      flex-direction: row;

  `;

export const ButtonEditText = Styled.Text`
      font-size: 14px;
      color: ${colors.white};
      font-weight: 600;
      margin-left: 8px;
  `;

export const Indicator = Styled.View`
    justify-content: center;
    align-items: center;
`;
