import React from "react";
import { View } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";

import { LogoSvg } from "../../../../components";
import { Container } from "./styles";
import { colors } from "../../../../constants/colors";

export default function Header({ name, onPress }) {
  return (
    <Container>
      <BorderlessButton {...{ onPress }}>
        <Icon {...{ name }} size={30} color={colors.primary} />
      </BorderlessButton>
      <View style={{ marginRight: 40 }}>
        <LogoSvg />
      </View>
      <View style={{ backgroundColor: colors.primary }} />
    </Container>
  );
}
