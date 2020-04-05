import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';

export const Container = styled.View`
  height: 80%;
  background-color: #ccc;
  margin-bottom: 10px;
  border-radius: 4px;
  box-shadow: 1px 1px 2px #ccc;
`;

export const Camera = styled(RNCamera)`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const CaptureButton = styled.TouchableOpacity`
  background-color: rgba(0, 180, 180, 0.6);
  align-self: center;

  width: 70px;
  height: 70px;
  border-radius: 35px;
  padding: 10px;
  margin-bottom: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TakenPicture = styled.Image`
  flex: 1;
  height: 100%;
`;
