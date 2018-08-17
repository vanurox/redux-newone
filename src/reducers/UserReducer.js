const reducer = (state, action = {
    type: 'nothing'
}) => {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case "INC":
            newState.count = +state.count + 1;
            return newState;
        case "DEC":
            newState.count = +state.count - 1;
            return newState;
        default:
            return state;
    }
};

export default reducer;