var defaultState = {
    errorMsg: ''
}

function error(state = defaultState, action) {
    switch (action.type) {
        case('RECEIVED_FEES_FAILURE'):
            return Object.assign({}, state, {errorMsg: action.data.msg});
        case('RECEIVED_FEES_SUCCESS'):
            return Object.assign({}, state, {errorMsg: ''})    
        default: 
            return state;
    }
}

export default error;