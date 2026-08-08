import { useContext } from "react"
import FilterCard from "./FilterCard"
import { JobFilterContext } from "../context/JobFilterContext"
import { useJobFilters } from "../hooks/useJobFilters"


function SearchBar() {
  const { state } = useContext(JobFilterContext)
  const { handleClearFilter } = useJobFilters()
  return (
    <div className="max-w-6xl px-4 sticky top-0 z-10 m-auto p-6 bg-white shadow-xl -mt-8 rounded-md flex justify-between">
      <div className="flex gap-4 flex-wrap">
        {state.filters.length > 0 && state.filters.map((item, key) => {
          return <FilterCard key={key} item={item} />
        })}
      </div>
      <button onClick={handleClearFilter}
        className="underline text-primary-green-400 
        font-semibold cursor-pointer active:scale-95">
        Clear
      </button>
    </div>
  )
}

export default SearchBar