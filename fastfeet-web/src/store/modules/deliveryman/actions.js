export function createDeliverymanRequest(data) {
  return {
    type: '@deliveryman/CREATE_REQUEST',
    payload: { data }
  };
}

export function createDeliverymanSuccess(data) {
  return {
    type: '@deliveryman/CREATE_SUCCESS',
    payload: { data }
  };
}

export function createDeliverymanFailure() {
  return {
    type: '@deliveryman/CREATE_FAILURE'
  };
}
