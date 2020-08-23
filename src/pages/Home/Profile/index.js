import React, { useState } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { Header, ModalRemove } from "../components";
import {
  Container,
  Content,
  ImageProfile,
  TextName,
  TextValues,
  TextData,
  GroupButton,
  ButtonCancel,
  ButtonCancelText,
  ButtonEdit,
  ButtonEditText,
} from "./styles";

export default function Profile() {
  const [modal, setModal] = useState(false);

  const navigation = useNavigation();

  function handleModal() {
    setModal(true);
  }

  return (
    <Container>
      <Header iconName="chevron-left" onPress={() => navigation.goBack()} />
      <ImageProfile />
      <Content>
        <TextName>Juliano Reis</TextName>
        <TextValues>Front-end Developer</TextValues>
        <TextData>Idade</TextData>
        <TextValues>Lorem Ipsum</TextValues>
        <TextData>Tempo de empresa</TextData>
        <TextValues>Lorem Ipsum</TextValues>
        <TextData>Projetos que participou</TextData>
        <TextValues>Lorem Ipsum</TextValues>
      </Content>
      <GroupButton>
        <ButtonCancel onPress={handleModal}>
          <Ionicons name="md-trash" size={24} color="#212121" />

          <ButtonCancelText>Excluir</ButtonCancelText>
        </ButtonCancel>
        <ButtonEdit>
          <Icon name="edit" color="#ffffff" size={24} />

          <ButtonEditText>Editar</ButtonEditText>
        </ButtonEdit>
      </GroupButton>
      <ModalRemove visible={modal} onRequestClose={() => setModal(false)} />
    </Container>
  );
}
