import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

import { Header, ModalRemove } from "../components";
import {
  NaversShowRequest,
  NaversRemoveRequest,
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

export default function Profile() {
  const [modal, setModal] = useState(false);

  const navigation = useNavigation();
  const routes = useRoute();
  const dispatch = useDispatch();

  const profileId = routes.params.id;

  const userInfo = useSelector((state) => state.navers.user);
  const loading = useSelector((state) => state.navers.loadingProfile);

  useEffect(() => {
    dispatch(NaversShowRequest(profileId));
  }, []);

  function handleModal() {
    setModal(true);
  }

  function handleEditProfile() {
    navigation.navigate("EditProfile", { profileId });
  }

  return (
    <Container>
      <Header name="chevron-left" onPress={() => navigation.goBack()} />
      {loading ? (
        <Indicator>
          <ActivityIndicator color="#212121" size="small" />
        </Indicator>
      ) : (
        <>
          <ImageProfile source={{ uri: userInfo.url }} />
          <Content>
            <TextName>{userInfo.name}</TextName>
            <TextValues>{userInfo.job_role}</TextValues>
            <TextData>Idade</TextData>
            <TextValues>{userInfo.birthdate}</TextValues>
            <TextData>Tempo de empresa</TextData>
            <TextValues>{userInfo.admission_date}</TextValues>
            <TextData>Projetos que participou</TextData>
            <TextValues>{userInfo.project}</TextValues>
          </Content>
        </>
      )}

      <GroupButton>
        <ButtonCancel onPress={handleModal}>
          <Ionicons name="md-trash" size={24} color="#212121" />

          <ButtonCancelText>Excluir</ButtonCancelText>
        </ButtonCancel>
        <ButtonEdit onPress={handleEditProfile}>
          <Icon name="edit" color="#ffffff" size={24} />

          <ButtonEditText>Editar</ButtonEditText>
        </ButtonEdit>
      </GroupButton>
      <ModalRemove
        visible={modal}
        onRequestClose={() => setModal(false)}
        onPress={() => dispatch(NaversRemoveRequest(profileId))}
      />
    </Container>
  );
}
