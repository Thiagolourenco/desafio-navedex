import Styled from "styled-components/native";
import { scale, moderateScale } from "react-native-size-matters";

import { colors } from "../../../../constants/colors";

export const Container = Styled.View`
    background-color:${colors.headerColor};
    height: ${scale(84)}px;
    box-shadow: 0px 2px 4px rgba(33, 33, 33, 0.25);
    flex-direction: row;
    align-items: center;
    padding-top: ${moderateScale(20)}px;
    padding-left: ${moderateScale(10)}px;
    justify-content: space-between;

`;
