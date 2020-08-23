import React, { useEffect } from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import {
  Container,
  Content,
  ContentHeader,
  ContentHeaderTitle,
  ContentValues,
  ButtonCancelText,
  ButtonCancel,
  ButtonGroupModal,
  ButtonRemove,
  ButtonRemoveText,
} from "./styles";

export default function ModalRemove({ visible, onRequestClose }) {
  return (
    <Modal
      visible={visible}
      onRequestClose={() => onRequestClose()}
      transparent={true}
      animationType="slide"
    >
      <Container>
        <Content>
          <ContentHeader>
            <ContentHeaderTitle>Excluir naver</ContentHeaderTitle>
            <TouchableOpacity onPress={onRequestClose}>
              <Icon name="x" color="#212121" size={28} />
            </TouchableOpacity>
          </ContentHeader>
          <ContentValues>
            Tem certeza que deseja excluir este naver?
          </ContentValues>

          <ButtonGroupModal>
            <ButtonCancel onPress={onRequestClose}>
              <ButtonCancelText>Cancelar</ButtonCancelText>
            </ButtonCancel>
            <ButtonRemove>
              <ButtonRemoveText>Excluir</ButtonRemoveText>
            </ButtonRemove>
          </ButtonGroupModal>
        </Content>
      </Container>
    </Modal>
  );
}
