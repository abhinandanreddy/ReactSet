
const mathState= {
    result: 0,
    lastValues:[]
}

const mathReducer = (state = mathState, action) => {
    switch (action.type) {
        case "add":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case "sub":
            state.result -= action.payload;
            break;
    }
    return state;
}

export default mathReducer;