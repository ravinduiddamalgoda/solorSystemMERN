import  {  createContext, useReducer } from 'react'

export const ClientsContext = createContext()

export const clientsReducer = (state, action) => {
    switch(action.type) {
        case 'SET_CLIENTS':
            return {
                clients: action.payload
            }
        case 'CREATE_CLIENT':
            return {
                clients: [action.payload, ...state.clients]
            }
        case 'DELETE_CLIENT':
            return {
                clients: state.clients.filter((client) => client._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const ClientsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(clientsReducer,{
        clients: null
    })
    return (
        <ClientsContext.Provider value = {{ ...state, dispatch }} >
            { children }
        </ClientsContext.Provider>
    )
}