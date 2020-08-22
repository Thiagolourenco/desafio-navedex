import React from "react";
import { Modal, View, Text } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

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
    >
      <Container>
        <Content>
          <ContentHeader>
            <ContentHeaderTitle>Excluir naver</ContentHeaderTitle>
            <RectButton onPress={() => onRequestClose()}>
              <Icon name="x" color="#212121" size={28} />
            </RectButton>
          </ContentHeader>
          <ContentValues>
            Tem certeza que deseja excluir este naver?
          </ContentValues>

          <ButtonGroupModal>
            <ButtonCancel>
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
