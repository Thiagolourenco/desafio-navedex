import produce from 'immer'

const INITIAL_STATE = {
    loading: false,
    signed: false,
    token: null,
    error: null
}

export default function auth(state=INITIAL_STATE, action) {
    return produce(state, (draft) => {
        switch(action.type) {
            case '@auth/AUTHENTICATION_REQUEST': {
                draft.loading = true;
                break;
            }

            case '@auth/AUTHENTICATION_SUCCESS': {
                draft.token = action.payload.token;
                draft.loading = false;
                break;
            }

            case '@auth/AUTHENTICATION_FAILURE': {
                draft.error = action.payload.error;
                draft.loading = false;
                break
            }

            default: 
                draft.loading = false;
                break;
        }
    })
}
