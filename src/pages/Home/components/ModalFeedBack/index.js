import React from 'react'
import { Modal, Text, TouchableOpacity } from 'react-native'
import { Feather as Icon } from "@expo/vector-icons";

import { Container, Content, ContentHeader, ContentHeaderTitle, ContentValues } from './styles'

export default function ModalFeedBack({ visible, onRequestClose, type }) {
    return (
        <Modal visible={visible} onRequestClose={() => onRequestClose()} transparent={true} animationType="fade">
            <Container>
                <Content>
                    <ContentHeader>
                        <ContentHeaderTitle>Naver {type}</ContentHeaderTitle>
                        <TouchableOpacity onPress={onRequestClose}>
                        <Icon name="x" color="#212121" size={28} />
                    </TouchableOpacity>
                    </ContentHeader>
                    <ContentValues>Naver {type} com sucesso!</ContentValues>
                   
                </Content>
                
            </Container>
        </Modal>
    )
}