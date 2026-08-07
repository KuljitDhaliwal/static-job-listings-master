import { useContext } from "react"
import { JobFilterContext } from "../context/JobFilterContext"

export const useAddFilter = () => {

    const { state, dispatch } = useContext(JobFilterContext)
    
    //SetFilter
    const handleSetFilter = (type) => {
        if(state.filters.includes(type))return
        dispatch({
            type: 'setFilter',
            payload: [...state.filters, type]
        })
    }

    //RemoveFilter
    const handleRemoveFilter = (type) => {
        const updateFilters = state.filters.filter(item => item !== type)
        dispatch({
            type: 'removeFilter',
            payload: updateFilters
        })
    }



    return {handleSetFilter, handleRemoveFilter}
}