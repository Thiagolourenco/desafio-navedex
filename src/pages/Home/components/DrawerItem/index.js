import React from "react";
import { useNavigation } from "@react-navigation/native";

import { ButtonItem, ButtonItemText } from "./styles";

export default function DrawerItem({ name, onPress }) {
  return (
    <ButtonItem activeOpacity={0.7} {...{ onPress }}>
      <ButtonItemText>{name}</ButtonItemText>
    </ButtonItem>
  );
}
