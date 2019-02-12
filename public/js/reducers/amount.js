var defaultState = {
    originAmount: '0.00',
    destinationAmount: '0.00',
    originCurrency: 'USD',
    destinationCurrency: 'EUR',
    conversionRate: 1.5,
    feeAmount: 0.00,
    totalCost: 0.00
};

function amount(state = defaultState, action) {
    console.log('state', state);
    if (action.type === 'CHANGE_ORIGIN_AMOUNT') {
        return Object.assign({}, state, {originAmount: action.data.newAmount});
    } else if (action.type === 'CHANGE_DESTINATION_AMOUNT') {
        return Object.assign({}, state, {destinationAmount: action.data.newDestAmount});
    } else if (action.type === 'CHANGE_ORIGIN_CURRENCY') {
        return Object.assign({}, state, {originCurrency: action.data.newCurrency});
    } else if (action.type === 'CHANGE_DESTINATION_CURRENCY') {
        return Object.assign({}, state, {destinationCurrency: action.data.newDesturrency});
    } else if (action.type === 'RECEIVED_CONVERSION_RATE_SUCCESS') {
        return Object.assign({}, state, {
            conversionRate: action.data.xRate,
            originAmount: action.data.originAmount,
            destinationAmount: action.data.destAmount
        });
    } else if (action.type === "RECEIVED_FEES_SUCCESS") {
        var newFeeAmount = action.data.feeAmount;
        var newTotal = parseFloat(state.originAmount, 10) + parseFloat(newFeeAmount, 10);

        return Object.assign({}, state, {
            feeAmount: newFeeAmount,
            totalCost: newTotal
        });
    }
    
    return state;
}

export default amount;