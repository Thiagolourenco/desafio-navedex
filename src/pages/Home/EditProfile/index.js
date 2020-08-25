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
} from "../../../store/modules/navers/actions";
import api from '../../../services/api'

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

export default function EditProfile() {
  const [name, setName] = useState("");
  const [job_role, setCargo] = useState("");
  const [birthdate, setIdade] = useState("");
  const [admission_date, setTempoEmpresa] = useState("");
  const [project, setProjetosParcipou] = useState("");
  const [url, setUrlPhoto] = useState("");
  const [modal, setModal] = useState(true);

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

  const profileId = routes.params.profileId;

  useEffect(() => {
    setName(userInfo.name);
    setCargo(userInfo.job_role);
    setIdade(userInfo.birthdate);
    setTempoEmpresa(userInfo.admission_date);
    setProjetosParcipou(userInfo.project);
    setUrlPhoto(userInfo.url);
    setModal(modalInfo);
  }, [userInfo]);

  useEffect(() => {
    dispatch(NaversShowRequest(profileId));
  }, []);

  async function handleEditNaver() {
    const obj = {
      job_role: job_role,
      admission_date: admission_date,
      birthdate: birthdate,
      project:project,
      name: name,
      url: url
    }

    const objTest = {
      "job_role": "Desenvolvedor Mobile",
      "admission_date": "19/08/2018",
      "birthdate": "12/04/1992",
      "project": "Project Backend Test",
      "name": "Joao",
      "url": "teste-path/image-test.png"
    }

    console.log("OBJ", obj)
    await api.put(`/navers/${profileId}`, objTest).then(res => console.log(res)).catch(err => console.log(err))
    // dispatch(
    //   NaversUpdateRequest(
    //     profileId,
    //     name,
    //     cargo,
    //     idade,
    //     tempoEmpresa,
    //     projetosParcipou,
    //     urlPhoto
    //   )
    // );
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
            value={job_role}
            onChangeText={(value) => setCargo(value)}
            onSubmitEditing={() => idadeRef.current.focus()}
          />
          <Label>Idade</Label>
          <Input
            ref={idadeRef}
            placeholder="Idade"
            value={birthdate}
            onChangeText={(value) => setIdade(value)}
            onSubmitEditing={() => tempoEmpresaRef.current.focus()}
          />
          <Label>Tempo de empresa</Label>
          <Input
            ref={tempoEmpresaRef}
            placeholder="Tempo de empresa"
            value={admission_date}
            onChangeText={(value) => setTempoEmpresa(value)}
            onSubmitEditing={() => projetosParcipouRef.current.focus()}
          />
          <Label>Projetos que participou</Label>
          <Input
            ref={projetosParcipouRef}
            placeholder="Projetos que participou"
            value={project}
            onChangeText={(value) => setProjetosParcipou(value)}
            onSubmitEditing={() => urlPhotoRef.current.focus()}
          />
          <Label>URL da foto do naver</Label>
          <Input
            ref={urlPhotoRef}
            placeholder="URL da foto do naver"
            value={url}
            onChangeText={(value) => setUrlPhoto(value)}
          />
        </Content>
        <ButtonSave onPress={handleEditNaver}>
          {loading ? (
            <ActivityIndicator size="small" color={colors.white} />
          ) : (
            <ButtonSaveText>Salvar</ButtonSaveText>
          )}
        </ButtonSave>
      </KeyboardAwareScrollView>
      {loading ? (
        <ModalFeedBack
          visible={modal}
          onRequestClose={() => setModal(false)}
          type="editado"
        />
      ) : (
        <View />
      )}
    </Container>
  );
}