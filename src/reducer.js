const reducer = (state, action) => {
    switch (action.type) {
        case "save_settings":
            return Object.assign({}, state, { settings: action.payload });
        default:
            return state;
    }
};

export default reducer;