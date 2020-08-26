import React, { useState, useRef } from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSelector, useDispatch } from "react-redux";

import { Header, ModalFeedBack } from "../components";
import {
  NaversCreateRequest,
  NaversCloseModalFeed,
} from "../../../store/modules/navers/actions";

import {
  Container,
  Title,
  Label,
  Input,
  Content,
  ButtonSave,
  ButtonSaveText,
} from "./styles";
import { colors } from '../../../constants/colors'

export default function AddNaver() {
  const [name, setName] = useState("");
  const [cargo, setCargo] = useState("");
  const [idade, setIdade] = useState("");
  const [tempoEmpresa, setTempoEmpresa] = useState("");
  const [projetosParcipou, setProjetosParcipou] = useState("");
  const [urlPhoto, setUrlPhoto] = useState("");

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.navers.loading);
  const modal = useSelector((state) => state.navers.modalFeed);

  //refs
  const cargoRef = useRef(null);
  const idadeRef = useRef(null);
  const tempoEmpresaRef = useRef(null);
  const projetosParcipouRef = useRef(null);
  const urlPhotoRef = useRef(null);

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
      <Header name="chevron-left" onPress={() => navigation.goBack()} />

      <KeyboardAwareScrollView>
        <Title>Adicionar naver</Title>

        <ScrollView>
        <Content>
          <Label>Name</Label>
          <Input
            placeholder="Name"
            value={name}
            onChangeText={(value) => setName(value)}
            onSubmitEditing={() => cargoRef.current.focus()}
            returnKeyLabel="next"
            returnKeyType="next"
          />
          <Label>Cargo</Label>
          <Input
            ref={cargoRef}
            placeholder="Cargo"
            value={cargo}
            onChangeText={(value) => setCargo(value)}
            onSubmitEditing={() => idadeRef.current.focus()}
            returnKeyLabel="next"
            returnKeyType="next"
          />
          <Label>Idade</Label>
          <Input
            ref={idadeRef}
            placeholder="Idade"
            value={idade}
            onChangeText={(value) => setIdade(value)}
            onSubmitEditing={() => tempoEmpresaRef.current.focus()}
            returnKeyLabel="next"
            returnKeyType="next"
          />
          <Label>Tempo de empresa</Label>
          <Input
            ref={tempoEmpresaRef}
            placeholder="Tempo de empresa"
            value={tempoEmpresa}
            onChangeText={(value) => setTempoEmpresa(value)}
            onSubmitEditing={() => projetosParcipouRef.current.focus()}
            returnKeyLabel="next"
            returnKeyType="next"
          />
          <Label>Projetos que participou</Label>
          <Input
            ref={projetosParcipouRef}
            placeholder="Projetos que participou"
            value={projetosParcipou}
            onChangeText={(value) => setProjetosParcipou(value)}
            onSubmitEditing={() => urlPhotoRef.current.focus()}
            returnKeyLabel="next"
            returnKeyType="next"
          />
          <Label>URL da foto do naver</Label>
          <Input
            ref={urlPhotoRef}
            placeholder="URL da foto do naver"
            value={urlPhoto}
            onChangeText={(value) => setUrlPhoto(value)}
            returnKeyLabel="go"
            returnKeyType="go"
            onSubmitEditing={handleCreateNavers}
          />
        </Content>
        </ScrollView>
        <ButtonSave onPress={handleCreateNavers}>
          {loading ? (
            <ActivityIndicator size="small" color={colors.white} />
          ) : (
            <ButtonSaveText>Salvar</ButtonSaveText>
          )}
        </ButtonSave>
      </KeyboardAwareScrollView>

      <ModalFeedBack
        visibles={modal}
        onRequestCloses={() => dispatch(NaversCloseModalFeed())}
        type="adicionado"
      />
    </Container>
  );
}
