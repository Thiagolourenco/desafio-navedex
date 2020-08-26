import React, { useState, useRef, useEffect, useMemo } from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSelector, useDispatch } from "react-redux";
import { format } from "date-fns";
import pt from "date-fns/locale/pt";

import { Header, ModalFeedBack } from "../components";
import {
  NaversShowRequest,
  NaversUpdateRequest,
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
import { colors } from "../../../constants/colors";

export default function EditProfile() {
  const [name, setName] = useState("");
  const [job_role, setCargo] = useState("");
  const [birthdate, setIdade] = useState("");
  const [admission_date, setTempoEmpresa] = useState("");
  const [project, setProjetosParcipou] = useState("");
  const [url, setUrlPhoto] = useState("");

  const cargoRef = useRef(null);
  const idadeRef = useRef(null);
  const tempoEmpresaRef = useRef(null);
  const projetosParcipouRef = useRef(null);
  const urlPhotoRef = useRef(null);

  const routes = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.navers.user);
  const loading = useSelector((state) => state.navers.loading);
  const modal = useSelector((state) => state.navers.modalFeed);

  const profileId = routes.params.profileId;

  const dataBirthdate = userInfo.birthdate;
  const dataJobRole = userInfo.admission_date;

  const dataFormatedBirthdate = useMemo(
    () => format(new Date(dataBirthdate), "dd/MM/yyyy", { locale: pt }),
    [dataBirthdate]
  );

  const dataFormatedJobRole = useMemo(
    () => format(new Date(dataJobRole), "dd/MM/yyyy", { locale: pt }),
    [dataJobRole]
  );

  useEffect(() => {
    setName(userInfo.name);
    setCargo(userInfo.job_role);
    setIdade(dataFormatedBirthdate);
    setTempoEmpresa(dataFormatedJobRole);
    setProjetosParcipou(userInfo.project);
    setUrlPhoto(userInfo.url);
  }, [userInfo, dataFormatedBirthdate, dataFormatedJobRole]);

  useEffect(() => {
    dispatch(NaversShowRequest(profileId));
  }, []);

  async function handleEditNaver() {
    dispatch(
      NaversUpdateRequest(
        profileId,
        name,
        job_role,
        birthdate,
        admission_date,
        project,
        url
      )
    );
  }

  return (
    <Container>
      <Header name="chevron-left" onPress={() => navigation.goBack()} />

      <Title>Editar naver</Title>

      <KeyboardAwareScrollView>
        <ScrollView>
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
        </ScrollView>
        <ButtonSave onPress={handleEditNaver}>
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
        type="editado"
      />
    </Container>
  );
}
