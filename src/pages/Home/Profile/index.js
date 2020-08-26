import React, { useEffect } from "react";
import {ActivityIndicator, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { differenceInMonths } from "date-fns";

import { Header, ModalRemove, ModalFeedBack } from "../components";
import {
  NaversShowRequest,
  NaversRemoveRequest,
  NaversCloseModalProfile,
  NaversOpenModalProfile,
  NaversCloseModalFeed,
} from "../../../store/modules/navers/actions";

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
  Indicator,
} from "./styles";
import { colors } from "../../../constants/colors";

export default function Profile() {
  const navigation = useNavigation();
  const routes = useRoute();
  const dispatch = useDispatch();

  const profileId = routes.params.id;

  const userInfo = useSelector((state) => state.navers.user);
  const loading = useSelector((state) => state.navers.loadingProfile);
  const modal = useSelector((state) => state.navers.modalProfile);
  const modalFeed = useSelector((state) => state.navers.modalFeed);

  const dataBirthdate = userInfo.birthdate;
  const dataJobRole = userInfo.admission_date;

  const birtdateValue = new Date(dataBirthdate).getFullYear();
  const anoAtual = new Date().getFullYear();
  const idadeAtual = anoAtual - birtdateValue;

  const admission_dateTempo = differenceInMonths(
    new Date(),
    new Date(dataJobRole)
  );

  useEffect(() => {
    const navers = navigation.addListener("focus", () => {
      dispatch(NaversShowRequest(profileId));
    });

    return navers;
  }, [navigation, modalFeed]);

  function handleEditProfile() {
    navigation.navigate("EditProfile", { profileId });
  }

  function handleModalRemove() {
    dispatch(NaversOpenModalProfile());
  }

  return (
    <Container>
      <Header name="chevron-left" onPress={() => navigation.goBack()} />
      <ScrollView>
      {loading ? (
        <Indicator>
          <ActivityIndicator color={colors.primary} size="large" />
        </Indicator>
      ) : (
        <>
          <ImageProfile source={{ uri: userInfo.url }} />
          <Content>
            <TextName>{userInfo.name}</TextName>
            <TextValues>{userInfo.job_role}</TextValues>
            <TextData>Idade</TextData>
            <TextValues>{idadeAtual} anos</TextValues>
            <TextData>Tempo de empresa</TextData>
            <TextValues>{admission_dateTempo} meses</TextValues>
            <TextData>Projetos que participou</TextData>
            <TextValues>{userInfo.project}</TextValues>
          </Content>
        </>
      )}

      <GroupButton>
        <ButtonCancel onPress={handleModalRemove}>
          <Ionicons name="md-trash" size={24} color={colors.primary} />

          <ButtonCancelText>Excluir</ButtonCancelText>
        </ButtonCancel>
        <ButtonEdit onPress={handleEditProfile}>
          <Icon name="edit" color={colors.white} size={24} />

          <ButtonEditText>Editar</ButtonEditText>
        </ButtonEdit>
      </GroupButton>
      </ScrollView>
      <ModalRemove
        visible={modal}
        onRequestClose={() => dispatch(NaversCloseModalProfile())}
        onPress={() => dispatch(NaversRemoveRequest(profileId))}
      />

      <ModalFeedBack
        visibles={modalFeed}
        onRequestCloses={() => dispatch(NaversCloseModalFeed())}
        type="excluido"
      />
    </Container>
  );
}
