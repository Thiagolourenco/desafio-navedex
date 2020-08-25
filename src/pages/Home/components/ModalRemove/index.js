import React, { useEffect, useState } from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
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
import ModalFeedBack from "../ModalFeedBack";
import { NaversCloseModalFeed } from "../../../../store/modules/navers/actions";
import { colors } from "../../../../constants/colors";

export default function ModalRemove({ visible, onRequestClose, onPress }) {

  const dispatch = useDispatch();
  const modal = useSelector((state) => state.navers.modalFeed);

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
        <ModalFeedBack
          visibles={modal}
          onRequestCloses={() => dispatch(NaversCloseModalFeed())}
          type="excluido"
        />
      </Container>
    </Modal>
  );
}
