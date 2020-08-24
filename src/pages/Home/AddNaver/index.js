import React, { useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSelector, useDispatch } from "react-redux";

import { Header, ModalFeedBack } from "../components";
import { NaversCreateRequest } from "../../../store/modules/navers/actions";

import {
  Container,
  Title,
  Label,
  Input,
  Content,
  ButtonSave,
  ButtonSaveText,
} from "./styles";

export default function AddNaver() {
  const [name, setName] = useState("");
  const [cargo, setCargo] = useState("");
  const [idade, setIdade] = useState("");
  const [tempoEmpresa, setTempoEmpresa] = useState("");
  const [projetosParcipou, setProjetosParcipou] = useState("");
  const [urlPhoto, setUrlPhoto] = useState("");
  const [modal, setModal] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.navers.loading);

  function handleSaveNavers() {
    setModal(true);
  }

  function handleCreateNavers() {
    dispatch(
      NaversCreateRequest(
        name,
        cargo,
        idade,
        tempoEmpresa,
        projetosParcipou,
        urlPhoto
      )
    );
  }

  return (
    <Container>
      <Header iconName="chevron-left" onPress={() => navigation.goBack()} />

      <KeyboardAwareScrollView>
        <Title>Adicionar naver</Title>

        <Content>
          <Label>Name</Label>
          <Input
            placeholder="Name"
            value={name}
            onChangeText={(value) => setName(value)}
          />
          <Label>Cargo</Label>
          <Input
            placeholder="Cargo"
            value={cargo}
            onChangeText={(value) => setCargo(value)}
          />
          <Label>Idade</Label>
          <Input
            placeholder="Idade"
            value={idade}
            onChangeText={(value) => setIdade(value)}
          />
          <Label>Tempo de empresa</Label>
          <Input
            placeholder="Tempo de empresa"
            value={tempoEmpresa}
            onChangeText={(value) => setTempoEmpresa(value)}
          />
          <Label>Projetos que participou</Label>
          <Input
            placeholder="Projetos que participou"
            value={projetosParcipou}
            onChangeText={(value) => setProjetosParcipou(value)}
          />
          <Label>URL da foto do naver</Label>
          <Input
            placeholder="URL da foto do naver"
            value={urlPhoto}
            onChangeText={(value) => setUrlPhoto(value)}
          />
        </Content>
        <ButtonSave onPress={handleCreateNavers}>
          {loading ? <ActivityIndicator size="small" color="#fff"/> : <ButtonSaveText>Salvar</ButtonSaveText> }
          
        </ButtonSave>
      </KeyboardAwareScrollView>

      <ModalFeedBack
        visible={modal}
        onRequestClose={() => setModal(false)}
        type="adicionado"
      />
    </Container>
  );
}
