
const userState= {
    name: "Abhi",
    age:27
}

const userReducer = (state = userState, action) => {
    switch (action.type) {
        case "setName":
            state = {
                ...state,
                name: action.payload,
            };
            break;
        case "setAge":
            state = {
                ...state,
                age: action.payload
            }
            break;
    }
    return state;
}

export default userReducer;