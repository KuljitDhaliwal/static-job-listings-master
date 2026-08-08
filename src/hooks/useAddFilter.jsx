import { useContext, useEffect } from "react"
import { JobFilterContext } from "../context/JobFilterContext"
import Data from '../data.json'
export const useAddFilter = () => {

    const { state, dispatch } = useContext(JobFilterContext)
    //SetFilter
    const handleSetFilter = (type) => {
        if (state.filters.includes(type)) return
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


    //ClearFilters
    const handleClearFilter = () => {
        dispatch({
            type: 'clearSearchbar'
        })
    }


    useEffect(() => {

        if(state.filters.length > 0){
            const data = Data.filter(job => {
                const filtered = [
                    job.role,
                    job.position,
                    job.level,
                    ...job.tools,
                    ...job.languages
                ]
                return state.filters.every(item => filtered.includes(item))
            })

            dispatch({
                type: 'filterData',
                payload: data
            })
        }

    }, [state.filters, dispatch])


return { handleSetFilter, handleRemoveFilter, handleClearFilter }
}