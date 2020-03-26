import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { id } = payload;
    const response = yield call(api.get, `/deliveryman/${id}`);
    const { data } = response;

    if (!data) {
      Alert.alert('Erro no login', 'Id nao encontrado');
    }

    yield put(signInSuccess(data));
    // history.push('/orders');
  } catch (err) {
    Alert.alert('Falha na autenticação', 'Erro verifique seus dados');
    yield put(signFailure());
  }
}

export function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
