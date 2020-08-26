import React, { useState, useEffect } from "react";
import {
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

import { Header, ModalRemove, ModalFeedBack } from "../components";
import {
  NaversRequest,
  NaversRemoveRequest,
  NaversCloseModal,
  NaversOpenModal,
  NaversCloseModalFeed,
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
import { colors } from "../../../constants/colors";

export default function Dashboard() {
  const [removeId, setRemoveId] = useState("");

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const naversData = useSelector((state) => state.navers.data);
  const modal = useSelector((state) => state.navers.modal);
  const loading = useSelector((state) => state.navers.loading);
  const modalFeed = useSelector((state) => state.navers.modalFeed);

  useEffect(() => {
    if (modalFeed) {
      const navers = navigation.addListener("focus", () => {
        dispatch(NaversRequest());
      });
      return navers;
    } else {
      const navers = navigation.addListener("focus", () => {
        dispatch(NaversRequest());
      });
      return navers;
    }
    const navers = navigation.addListener("focus", () => {
      dispatch(NaversRequest());
    });
    return navers;

  }, [navigation, naversData, modalFeed]);

  function handleModalVisible(id) {
    dispatch(NaversOpenModal());
    setRemoveId(id);
  }

  function handleProfile(id) {
    navigation.navigate("Profile", { id });
  }

  function handleEditProfile(profileId) {
    navigation.navigate("EditProfile", { profileId });
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
          <ActivityIndicator size="large" color={colors.primary} />
        </Indicator>
      ) : (
        <FlatList
          data={naversData}
          numColumns="2"
          style={{ marginBottom: 20, flex: 1 }}
          keyExtractor={(item) => String(item.id)}
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
                  <Ionicons name="md-trash" size={24} color={colors.primary} />
                </ButtonRemove>
                <ButtonEdit onPress={() => handleEditProfile(item.id)}>
                  <Icon name="edit" color={colors.primary} size={24} />
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

      <ModalFeedBack
        visibles={modalFeed}
        onRequestCloses={() => dispatch(NaversCloseModalFeed())}
        type="excluido"
      />
    </Container>
  );
}
