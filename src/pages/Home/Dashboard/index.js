import React, { useState } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { Header, ModalRemove } from "../components";

import {
  Container,
  HeaderButton,
  ButtonAddNave,
  TitleNavers,
  ButtonAddNaveText,
  ListViewContent,
  ListViewContentText,
  ListViewContentTextSubTitle,
  ImageView,
  GroupButton,
  ButtonRemove,
  ButtonEdit,
} from "./styles";

export default function Dashboard() {
  const [modal, setModal] = useState(false);

  const navigation = useNavigation();

  const data = [1, 2, 3, 4];

  function handleModalVisible() {
    setModal(true);
  }

  function handleProfile() {
    navigation.navigate("Profile");
  }

  return (
    <Container>
      <Header iconName="menu" onPress={() => navigation.openDrawer()} />
      <HeaderButton>
        <TitleNavers>Navers</TitleNavers>
        <ButtonAddNave>
          <ButtonAddNaveText>Adicionar naver</ButtonAddNaveText>
        </ButtonAddNave>
      </HeaderButton>

      <FlatList
        data={data}
        numColumns="2"
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <ListViewContent>
            <ImageView onPress={handleProfile} />
            <ListViewContentText>Juliano Reis</ListViewContentText>
            <ListViewContentTextSubTitle>
              Front-end Developer
            </ListViewContentTextSubTitle>
            <GroupButton>
              <ButtonRemove onPress={handleModalVisible}>
                <Ionicons name="md-trash" size={24} color="#212121" />
              </ButtonRemove>
              <ButtonEdit onPress={() => {}}>
                <Icon name="edit" color="#212121" size={24} />
              </ButtonEdit>
            </GroupButton>
          </ListViewContent>
        )}
      />

      <ModalRemove visible={modal} onRequestClose={() => setModal(false)} />
    </Container>
  );
}
