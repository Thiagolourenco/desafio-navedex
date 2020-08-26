import React from "react";
import { Modal, TouchableOpacity } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

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
import { colors } from "../../../../constants/colors";

export default function ModalRemove({ visible, onRequestClose, onPress }) {
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
              <Icon name="x" color={colors.primary} size={28} />
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
      </Container>
    </Modal>
  );
}
