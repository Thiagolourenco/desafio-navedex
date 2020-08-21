import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/drawer";

import { Container, Header, Content } from "./styles";
import DrawerItem from "../DrawerItem";

export default function CustomDrawer({ navigation }) {
  const data = [
    {
      id: 1,
      name: "Navers",
      screen: "DrawerHome",
    },
    {
      id: 2,
      name: "Sair",
      screen: "DrawerHome",
    },
  ];
  function closeMenuDrawer() {
    navigation.closeDrawer();
  }

  return (
    <Container>
      <Header>
        <BorderlessButton
          onPress={closeMenuDrawer}
          style={{ marginLeft: 15, marginTop: 30, height: 40, width: 40 }}
        >
          <Icon name="menu" size={30} color="#212121" />
        </BorderlessButton>
      </Header>
      <Content>
        {data.map((item) => (
          <DrawerItem
            key={item.id}
            name={item.name}
            onPress={() => navigation.navigate(item.screen)}
          />
        ))}
      </Content>
    </Container>
  );
}
