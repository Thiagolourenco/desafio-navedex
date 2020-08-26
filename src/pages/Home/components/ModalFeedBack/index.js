import React from "react";
import { Modal, TouchableOpacity } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import {
  Container,
  Content,
  ContentHeader,
  ContentHeaderTitle,
  ContentValues,
} from "./styles";
import { colors } from "../../../../constants/colors";

export default function ModalFeedBack({ visibles, onRequestCloses, type }) {
  return (
    <Modal
      visible={visibles}
      onRequestClose={() => onRequestCloses()}
      transparent={true}
      animationType="fade"
    >
      <Container>
        <Content>
          <ContentHeader>
            <ContentHeaderTitle>Naver {type}</ContentHeaderTitle>
            <TouchableOpacity onPress={onRequestCloses}>
              <Icon name="x" color={colors.primary} size={28} />
            </TouchableOpacity>
          </ContentHeader>
          <ContentValues>Naver {type} com sucesso!</ContentValues>
        </Content>
      </Container>
    </Modal>
  );
}
