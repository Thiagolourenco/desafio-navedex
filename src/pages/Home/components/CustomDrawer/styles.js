import Styled from "styled-components/native";

import { colors } from '../../../../constants/colors'

export const Container = Styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const Header = Styled.View`
  flex: 0.4;
  height: 100px;
  width: 100px;
`;

export const Content = Styled.View`
  flex: 0.1;
  background-color: ${colors.white};
  width: 100%;
  align-items: center;

`;
