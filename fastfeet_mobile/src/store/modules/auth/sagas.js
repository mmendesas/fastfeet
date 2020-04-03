/* eslint-disable camelcase */
import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { id } = payload;
    const response = yield call(api.get, `/deliveryman/${id}`);
    const { name, email, avatar, created_at } = response.data;

    const profile = { name, email, avatar, created_at };
    yield put(signInSuccess(id, profile));

    // history.push('/orders');
  } catch (err) {
    Alert.alert('Falha na autenticação', 'Erro verifique seus dados');
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
