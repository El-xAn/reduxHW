const defaultState = {
    name: 'Elxan',
    number: '999999'
}

export const reducers = (state = defaultState, action) => {
    switch(action.type) {
        case 'addInfo': 
            return{
                ...state,
                name: action.name,
                number: action.phoneNumber
            }
            }
            return state
}