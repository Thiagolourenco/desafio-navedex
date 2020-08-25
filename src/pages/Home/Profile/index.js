import React, { useState, useEffect, useMemo } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import pt from "date-fns/locale/pt";

import { Header, ModalRemove, DateFormated, ModalFeedBack } from "../components";
import {
  NaversShowRequest,
  NaversRemoveRequest,
  NaversCloseModal,
  NaversOpenModal,
  NaversCloseModalProfile,
  NaversOpenModalProfile,
  NaversCloseModalFeed
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

  console.log("DATA JOB ROLE -> ", format(new Date(), "yyyy-LL-dd"));

  // const dataFormatedBirthdate = useMemo(
  //   () => format(dataBirthdate, 'dd/MM/yyyy', {locale: pt}),
  //   [dataBirthdate],
  // );

  // console.log("DATA BIRTHDATE -> ", dataFormatedBirthdate);

  useEffect(() => {
    const navers = navigation.addListener("focus", () => {
      dispatch(NaversShowRequest(profileId));
    });

    return navers;
  }, [navigation]);

  // function handleModal() {
  //   setModal(true);
  // }

  function handleEditProfile() {
    navigation.navigate("EditProfile", { profileId });
  }

  function handleModalRemove() {
    dispatch(NaversOpenModalProfile())
  }

  return (
    <Container>
      <Header name="chevron-left" onPress={() => navigation.goBack()} />
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
            <TextValues>{userInfo.birthdate}</TextValues>
            {/* <DateFormated data={userInfo.birthdate} /> */}
            <TextData>Tempo de empresa</TextData>
            <TextValues>{userInfo.admission_date}</TextValues>
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
