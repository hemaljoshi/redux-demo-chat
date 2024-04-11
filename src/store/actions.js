import { ADD_USER, FETCH_USER, SEND_MESSAGE } from "./actionTypes";

export const addUser = (email, isOnline) => ({
    type: ADD_USER,
    payload: { email, online: isOnline }
})

export const fetchUsers = () => ({
    type: FETCH_USER
})

export const sendMessage = (senderId, receiverId, message) => ({
    type: SEND_MESSAGE,
    payload: { senderId, receiverId, message }
})
