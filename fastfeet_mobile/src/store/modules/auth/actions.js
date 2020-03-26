export function signInRequest(id) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { id },
  };
}

export function signInSuccess(id, profile) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { id, profile },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
