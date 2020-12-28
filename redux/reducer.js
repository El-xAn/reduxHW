import { Button } from "react-native"

const defaultState = {
list:  [ { name: 'Elxan',
number: '999999' } ] 
}

export const reducers = (state = defaultState, action) => {
    switch(action.type) {
        case 'addInfo': 
            return{
                ...state, list: [...state.list, action.payload]
                
            }
            }
            return state
}