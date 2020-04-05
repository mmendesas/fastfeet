/* eslint-disable camelcase */
import React, { useRef, useState } from 'react';
import { RNCamera } from 'react-native-camera';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useRoute, useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import Background from '~/components/Background';
import Button from '~/components/Button';

import api from '~/services/api';

import { Container, Camera, CaptureButton, TakenPicture } from './styles';

export default function ReportProblem() {
  const cameraRef = useRef();
  const route = useRoute();
  const auth = useSelector((state) => state.auth);
  const { navigate } = useNavigation();
  const [picture, setPicture] = useState(null);

  async function saveFile() {
    const data = new FormData();
    data.append('file', {
      type: 'image/jpg',
      uri: picture,
      name: 'signature.jpg',
    });

    const response = await api.post('files', data);
    return response.data;
  }

  async function handleSubmit() {
    const { order_id } = route.params;
    const { id, url } = await saveFile();

    try {
      await api.put(`deliveryman/${auth.id}/deliveries/${order_id}`, {
        signature_id: id,
        end_date: new Date(),
      });
    } catch (error) {
      Alert.alert('Erro ao enviar imagem', error);
    }

    navigate('Order');
  }

  async function handleTakePicture() {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      const { uri } = await cameraRef.current.takePictureAsync(options);
      setPicture(uri);
    }
  }

  return (
    <Background>
      <Container>
        {picture ? (
          <TakenPicture source={{ uri: picture }} />
        ) : (
          <Camera
            ref={cameraRef}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.off}
            captureAudio={false}
            androidCameraPermissionOptions={{
              title: 'Permissão para usar a camera',
              message: 'Presisamos da sua permissão para usar sua camera',
              buttonPositive: 'OK',
              buttonNegative: 'Cancelar',
            }}
          >
            <CaptureButton onPress={handleTakePicture}>
              <Icon name="photo-camera" size={40} color="#fff" />
            </CaptureButton>
          </Camera>
        )}
      </Container>
      <Button bgColor="#0aa" onPress={handleSubmit}>
        Enviar
      </Button>
    </Background>
  );
}
