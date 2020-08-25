import React, { useState, useEffect, useCallback } from "react";
import {
  FlatList,
  Image,
  ActivityIndicator,
  View,
  RefreshControl,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

import { Header, ModalRemove } from "../components";
import {
  NaversRequest,
  NaversRemoveRequest,
  NaversCloseModal,
  NaversOpenModal,
} from "../../../store/modules/navers/actions";

import {
  Container,
  HeaderButton,
  ButtonAddNave,
  TitleNavers,
  ButtonAddNaveText,
  ListViewContent,
  ListViewContentText,
  ListViewContentTextSubTitle,
  ImageView,
  GroupButton,
  ButtonRemove,
  ButtonEdit,
  ImageV,
  Indicator,
} from "./styles";

export default function Dashboard() {
  // const [modal, setModal] = useState(false);
  const [removeId, setRemoveId] = useState("");

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const naversData = useSelector((state) => state.navers.data);
  const modal = useSelector((state) => state.navers.modal);
  const loading = useSelector((state) => state.navers.loading);

  useEffect(() => {
    if (modal === false) {
      const navers = navigation.addListener("focus", () => {
        dispatch(NaversRequest());
      });
      console.log(modal, "TRUE");
      return navers;
    } else {
      console.log(modal, "FALSE");

      const navers = navigation.addListener("focus", () => {
        dispatch(NaversRequest());
      });
      return navers;
    }

    // dispatch(NaversRequest());
  }, [navigation, naversData, modal]);

  function handleModalVisible(id) {
    dispatch(NaversOpenModal());
    setRemoveId(id);
  }

  function handleProfile(id) {
    navigation.navigate("Profile", { id });
  }

  function handleEditProfile() {
    navigation.navigate("EditProfile");
  }

  function _onRefreshs() {
    dispatch(NaversRequest());
  }

  return (
    <Container>
      <Header name="menu" onPress={() => navigation.openDrawer()} />
      <HeaderButton>
        <TitleNavers>Navers</TitleNavers>
        <ButtonAddNave onPress={() => navigation.navigate("AddNaver")}>
          <ButtonAddNaveText>Adicionar naver</ButtonAddNaveText>
        </ButtonAddNave>
      </HeaderButton>

      {loading ? (
        <Indicator>
          <ActivityIndicator size="large" color="#212121" />
        </Indicator>
      ) : (
        <FlatList
          data={naversData}
          numColumns="2"
          style={{ marginBottom: 20 }}
          keyExtractor={(item) => String(item)}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={() => _onRefreshs()}
            />
          }
          renderItem={({ item }) => (
            <ListViewContent>
              <ImageView onPress={() => handleProfile(item.id)}>
                <ImageV source={{ uri: item.url }} />
              </ImageView>
              <ListViewContentText>{item.name}</ListViewContentText>
              <ListViewContentTextSubTitle>
                {item.job_role}
              </ListViewContentTextSubTitle>
              <GroupButton>
                <ButtonRemove onPress={() => handleModalVisible(item.id)}>
                  <Ionicons name="md-trash" size={24} color="#212121" />
                </ButtonRemove>
                <ButtonEdit onPress={handleEditProfile}>
                  <Icon name="edit" color="#212121" size={24} />
                </ButtonEdit>
              </GroupButton>
            </ListViewContent>
          )}
        />
      )}

      <ModalRemove
        visible={modal}
        onRequestClose={() => dispatch(NaversCloseModal())}
        onPress={() => dispatch(NaversRemoveRequest(removeId))}
      />
    </Container>
  );
}
