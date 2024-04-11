import { combineReducers } from "redux"
import { ADD_USER, FETCH_USER, SEND_MESSAGE } from "./actionTypes"

const initialState = {
    users: []
}

const messageReducerInitialState = {
    messages: []
}

export const userReducer = (state = initialState, action) => { 
    switch (action.type) { 
        case ADD_USER: { 
            return {
                ...state,
                users: [...state.users, {
                    email: action.payload.email,
                    online: action.payload.online
                }]
            }
        }
        case FETCH_USER: { 
            return state
        }
        default: 
        return state
    }
}

export const messageReducers = (state = messageReducerInitialState, action) => { 
    switch (action.type) { 
        case SEND_MESSAGE: { 
            const { senderId, receiverId, message } = action.payload;
            return {
                ...state,
                messages: [
                    ...state.messages,
                    { senderId, receiverId, message }
                ]
            }
        }
        default: 
            return state
    }
}

const rootReducer = combineReducers({
    user: userReducer,
    message: messageReducers
})

export default rootReducer
