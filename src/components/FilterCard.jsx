
import Times from '../assets/images/icon-remove.svg'
import { useJobFilters } from '../hooks/useJobFilters'
function FilterCard({item}) {
    const { handleRemoveFilter } = useJobFilters()
    return (
        <div className="flex">
            <p className='text-primary-green-400 md:text-sm bg-background-green font-semibold py-1 px-2'>{item}</p>
            <button onClick={()=>handleRemoveFilter(item)} className="bg-primary-green-400 px-2 text-white cursor-pointer active:scale-95 hover:bg-black">
                <img src={Times} alt="cancel" />
            </button>
        </div>
    )
}

export default FilterCard