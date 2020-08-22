import React from "react";
import { View, Text } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import { LogoSvg } from "../../../../components";

import { Container } from "./styles";

export default function Header({ iconName, onPress }) {
  return (
    <Container>
      <BorderlessButton {...{ onPress }}>
        <Icon name={iconName} size={30} color="#212121" />
      </BorderlessButton>
      <LogoSvg />
      <Icon name="" size={30} color="#212121" />
    </Container>
  );
}
