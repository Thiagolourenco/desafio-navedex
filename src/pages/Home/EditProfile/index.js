import React, { useState, useRef } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Header, ModalFeedBack } from "../components";

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
  const [name, setName] = useState("Fulano");
  const [cargo, setCargo] = useState("Dev");
  const [idade, setIdade] = useState("19");
  const [tempoEmpresa, setTempoEmpresa] = useState("2 anos");
  const [projetosParcipou, setProjetosParcipou] = useState(
    "Desenvolver um app"
  );
  const [urlPhoto, setUrlPhoto] = useState("Nenhuma");
  const [modal, setModal] = useState(false);

  const nameRef = useRef(null);
  const cargoRef = useRef(null);
  const idadeRef = useRef(null);
  const tempoEmpresaRef = useRef(null);
  const projetosParcipouRef = useRef(null);
  const urlPhotoRef = useRef(null);

  const navigation = useNavigation();

  function handleEditNaver() {
    setModal(true)
  }

  return (
    <Container>
      <Header iconName="chevron-left" onPress={() => navigation.goBack()} />

      <Title>Editar naver</Title>

      <KeyboardAwareScrollView>
        <Content>
          <Label>Name</Label>
          <Input
            placeholder="Name"
            value={name}
            onChangeText={(value) => setName(value)}
            onSubmitEditing={() => cargoRef.current.focus()}
          />
          <Label>Cargo</Label>
          <Input
            ref={cargoRef}
            placeholder="Cargo"
            value={cargo}
            onChangeText={(value) => setCargo(value)}
            onSubmitEditing={() => idadeRef.current.focus()}
          />
          <Label>Idade</Label>
          <Input
            ref={idadeRef}
            placeholder="Idade"
            value={idade}
            onChangeText={(value) => setIdade(value)}
            onSubmitEditing={() => tempoEmpresaRef.current.focus()}
          />
          <Label>Tempo de empresa</Label>
          <Input
            ref={tempoEmpresaRef}
            placeholder="Tempo de empresa"
            value={tempoEmpresa}
            onChangeText={(value) => setTempoEmpresa(value)}
            onSubmitEditing={() => projetosParcipouRef.current.focus()}
          />
          <Label>Projetos que participou</Label>
          <Input
            ref={projetosParcipouRef}
            placeholder="Projetos que participou"
            value={projetosParcipou}
            onChangeText={(value) => setProjetosParcipou(value)}
            onSubmitEditing={() => urlPhotoRef.current.focus()}
          />
          <Label>URL da foto do naver</Label>
          <Input
            ref={urlPhotoRef}
            placeholder="URL da foto do naver"
            value={urlPhoto}
            onChangeText={(value) => setUrlPhoto(value)}
          />
        </Content>
        <ButtonSave onPress={handleEditNaver}>
          <ButtonSaveText>Salvar</ButtonSaveText>
        </ButtonSave>
      </KeyboardAwareScrollView>
      <ModalFeedBack visible={modal} onRequestClose={() => setModal(false)} type="editado"/>

    </Container>
  );
}
