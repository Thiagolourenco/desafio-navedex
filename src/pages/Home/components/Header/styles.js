import Styled from "styled-components/native";

import { colors } from "../../../../constants/colors";

export const Container = Styled.View`
    background-color:${colors.headerColor};
    height: 84px;
    box-shadow: 0px 2px 4px rgba(33, 33, 33, 0.25);
    flex-direction: row;
    align-items: center;
    padding-top: 20px;
    padding-left: 10px;
    justify-content: space-between;

`;
