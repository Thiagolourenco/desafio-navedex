import React, { useEffect } from "react";
import { Modal, Text, TouchableOpacity } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import {
  Container,
  Content,
  ContentHeader,
  ContentHeaderTitle,
  ContentValues,
} from "./styles";
import { NaversCloseModal } from "../../../../store/modules/navers/actions";

export default function ModalFeedBack({ visibles, onRequestCloses, type }) {
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     if (visibles === true) {
  //       dispatch(NaversCloseModal());
  //     }
  //     console.log("VISIBLE => ", visibles);
  //     //
  //   }, [visibles]);

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
              <Icon name="x" color="#212121" size={28} />
            </TouchableOpacity>
          </ContentHeader>
          <ContentValues>Naver {type} com sucesso!</ContentValues>
        </Content>
      </Container>
    </Modal>
  );
}
