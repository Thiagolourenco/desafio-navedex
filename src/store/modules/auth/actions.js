export function AuthenticationRequest(email, password) {
    return {
        type: "@auth/AUTHENTICATION_REQUEST",
        payload: { email, password }
    }
}

export function AuthenticationSuccess(token) {
    return {
        type: "@auth/AUTHENTICATION_SUCCESS",
        payload: { token }
    }
}

export function AuthenticationFailure(error) {
    return {
        type: "@auth/AUTHENTICATION_FAILURE",
        payload: { error }
    }
}

export function signOut() {
    return {
        type: '@auth/SIGN_OUT'
    }
}