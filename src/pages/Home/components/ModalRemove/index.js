import React, { useEffect, useState } from "react";
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
import ModalFeedBack from "../ModalFeedBack";

export default function ModalRemove({ visible, onRequestClose, onPress }) {
  const [modal, setModal] = useState(false);

  function handleRemoveNaver() {
    // onRequestClose();
    setModal(true);
  }

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
            <ButtonRemove {...{ onPress }}>
              <ButtonRemoveText>Excluir</ButtonRemoveText>
            </ButtonRemove>
          </ButtonGroupModal>
        </Content>
        <ModalFeedBack
          visible={modal}
          onRequestClose={() => setModal(false)}
          type="excluido"
        />
      </Container>
    </Modal>
  );
}
