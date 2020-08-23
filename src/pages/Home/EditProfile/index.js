import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Header } from "../components";

import {
  Container,
  Title,
  Label,
  Input,
  Content,
  ButtonSave,
  ButtonSaveText,
} from "./styles";

export default function EditProfile() {
  const navigation = useNavigation();

  return (
    <Container>
      <Header iconName="chevron-left" onPress={() => navigation.goBack()} />

      <Title>Adicionar naver</Title>

      <Content>
        <Label>Name</Label>
        <Input placeholder="Name" />
        <Label>Cargo</Label>
        <Input placeholder="Cargo" />
        <Label>Idade</Label>
        <Input placeholder="Idade" />
        <Label>Tempo de empresa</Label>
        <Input placeholder="Tempo de empresa" />
        <Label>Projetos que participou</Label>
        <Input placeholder="Projetos que participou" />
        <Label>URL da foto do naver</Label>
        <Input placeholder="URL da foto do naver" />
      </Content>
      <ButtonSave>
        <ButtonSaveText>Salvar</ButtonSaveText>
      </ButtonSave>
    </Container>
  );
}
