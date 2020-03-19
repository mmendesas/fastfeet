import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { createDeliverymanSuccess, createDeliverymanFailure } from './actions';

export function* createRequest({ payload }) {
  try {
    const { name, email, avatar_id } = payload.data;
    const deliveryman = { name, email, avatar_id };
    const response = yield call(api.post, 'deliveryman', deliveryman);

    toast.success('Entregador cadastrado com sucesso');
    yield put(createDeliverymanSuccess(response.data));
  } catch (err) {
    toast.success('Erro ao cadastrar entregador');
    yield put(createDeliverymanFailure());
  }
}

export default all([takeLatest('@deliveryman/CREATE_REQUEST', createRequest)]);
