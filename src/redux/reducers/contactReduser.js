import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from "../types"

const initialState = [
    {
        id: 0,
        name: "Bekzod",
        email: "b@gmail.com",
        number: 12345,
    },
    {
        id: 1,
        name: "Sherzod",
        email: "s@gmail.com",
        number: 1234,
    },
    {
        id: 2,
        name: "Salim",
        email: "c@gmail.com",
        number: 12324,
    }
]

const contactReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_CONTACT:
            state = [...state, action.payload]
            return state
        case UPDATE_CONTACT:
            const updateContact = state.map(contact => contact.id === action.payload.id ? action.payload : contact)
            state = updateContact
            return state
        case DELETE_CONTACT:
             const filterContact = state.filter(contact => contact.id !== action.payload && contact)
             state = filterContact
             return state
        default:
            return state
    }
}

export default contactReducer