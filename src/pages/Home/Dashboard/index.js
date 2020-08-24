import React, { useState, useEffect } from "react";
import { FlatList, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

import { Header, ModalRemove } from "../components";
import {
  NaversRequest,
  NaversRemoveRequest,
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
} from "./styles";

export default function Dashboard() {
  const [modal, setModal] = useState(false);
  const [removeId, setRemoveId] = useState("");

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const naversData = useSelector((state) => state.navers.data);

  console.log("DATA", naversData);
  const data = [1, 2, 3, 4];

  useEffect(() => {
    dispatch(NaversRequest());
  }, []);

  function handleModalVisible(id) {
    setModal(true);
    setRemoveId(id);
  }

  function handleProfile(id) {
    navigation.navigate("Profile", { id });
  }

  function handleEditProfile() {
    navigation.navigate("EditProfile");
  }

  return (
    <Container>
      <Header iconName="menu" onPress={() => navigation.openDrawer()} />
      <HeaderButton>
        <TitleNavers>Navers</TitleNavers>
        <ButtonAddNave onPress={() => navigation.navigate("AddNaver")}>
          <ButtonAddNaveText>Adicionar naver</ButtonAddNaveText>
        </ButtonAddNave>
      </HeaderButton>

      <FlatList
        data={naversData}
        numColumns="2"
        keyExtractor={(item) => String(item)}
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

      <ModalRemove
        visible={modal}
        onRequestClose={() => setModal(false)}
        onPress={() => dispatch(NaversRemoveRequest(removeId))}
      />
    </Container>
  );
}
