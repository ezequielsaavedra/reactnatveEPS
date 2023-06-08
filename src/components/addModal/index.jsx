import { Modal, TouchableOpacity, View } from 'react-native'

import AddFavButton from '../addFavButton';
import AddFinishedButton from '../addFinishedButton/index,';
import AddListButton from '../addListButton';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react'
import styles from './styles';
import { useState } from 'react';

const AddModal = ({ selectedAnime }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setModalVisible(true)} activeOpacity={0.8}>
                <FontAwesome name="ellipsis-h" size={30} color="white" />
            </TouchableOpacity>
            <Modal
                animationType="slide"
                statusBarTranslucent={true}
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity
                            style={styles.buttonClose}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <FontAwesome name="close" size={24} color="white" />
                        </TouchableOpacity>
                        <AddFavButton selectedAnime={selectedAnime} />
                        <AddFinishedButton selectedAnime={selectedAnime} />
                        <AddListButton selectedAnime={selectedAnime} />
                    </View>
                </View>
            </Modal>
        </View>

    )
}

export default AddModal