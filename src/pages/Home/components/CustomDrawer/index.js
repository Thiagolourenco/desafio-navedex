import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import { Container, Header, Content, ButtonDrawer } from "./styles";
import DrawerItem from "../DrawerItem";
import { signOut } from "../../../../store/modules/auth/actions";
import { colors } from "../../../../constants/colors";

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
      screen: "Sair",
    },
  ];

  const dispatch = useDispatch();

  function closeMenuDrawer() {
    navigation.closeDrawer();
  }

  function handleDrawer(item) {
    if (item == "Sair") {
      dispatch(signOut());
    } else {
      navigation.navigate(item);
    }
  }

  return (
    <Container>
      <Header>
        <ButtonDrawer onPress={closeMenuDrawer}>
          <Icon name="menu" size={30} color={colors.primary} />
        </ButtonDrawer>
      </Header>
      <Content>
        {data.map((item) => (
          <DrawerItem
            key={item.id}
            name={item.name}
            onPress={() => handleDrawer(item.screen)}
          />
        ))}
      </Content>
    </Container>
  );
}
