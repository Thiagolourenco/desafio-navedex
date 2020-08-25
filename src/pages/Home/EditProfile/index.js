import React, { useState, useRef, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSelector, useDispatch } from "react-redux";

import { Header, ModalFeedBack } from "../components";
import {
  NaversShowRequest,
  NaversRemoveRequest,
  NaversUpdateRequest,
  NaversOpenModalFeed,
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

export default function EditProfile() {
  const [name, setName] = useState("");
  const [cargo, setCargo] = useState("");
  const [idade, setIdade] = useState("");
  const [tempoEmpresa, setTempoEmpresa] = useState("");
  const [projetosParcipou, setProjetosParcipou] = useState("");
  const [urlPhoto, setUrlPhoto] = useState("");

  const nameRef = useRef(null);
  const cargoRef = useRef(null);
  const idadeRef = useRef(null);
  const tempoEmpresaRef = useRef(null);
  const projetosParcipouRef = useRef(null);
  const urlPhotoRef = useRef(null);

  const routes = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.navers.user);
  const modalInfo = useSelector((state) => state.navers.modal);
  const loading = useSelector((state) => state.navers.loading);
  const modal = useSelector((state) => state.navers.modalFeed);

  const profileId = routes.params.profileId;

  useEffect(() => {
    setName(userInfo.name);
    setCargo(userInfo.job_role);
    setIdade(userInfo.birthdate);
    setTempoEmpresa(userInfo.admission_date);
    setProjetosParcipou(userInfo.project);
    setUrlPhoto(userInfo.url);
  }, [userInfo]);

  useEffect(() => {
    dispatch(NaversShowRequest(profileId));
  }, []);

  function handleEditNaver() {
    dispatch(
      NaversUpdateRequest(
        profileId,
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
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <ButtonSaveText>Salvar</ButtonSaveText>
          )}
        </ButtonSave>
      </KeyboardAwareScrollView>
      <ModalFeedBack
        visibles={modal}
        onRequestCloses={() => NaversCloseModalFeed(false)}
        type="editado"
      />
    </Container>
  );
}
