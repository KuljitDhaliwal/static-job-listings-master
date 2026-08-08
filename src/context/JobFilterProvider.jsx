import { useReducer } from "react";
import { JobFilterContext } from "./JobFilterContext";

const initialState = {
    filters: [],
}

function reducer(state, action) {
    switch (action.type) {

        case 'setFilter':
            return {
                ...state,
                filters: action.payload
            }

        case 'removeFilter':
            return {
                ...state,
                filters: action.payload
            }

        case 'clearSearchbar':
            return {
                ...state, 
                filters: [],
                filteredData: []
            }

        default:
            return state
    }
}

function JobFilterReducer({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <JobFilterContext.Provider value={{ state, dispatch }}>{children}</JobFilterContext.Provider>
    )
}

export default JobFilterReducer