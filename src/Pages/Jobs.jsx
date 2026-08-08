import { useContext } from 'react'
import BackgroundDesktop from '../assets/images/bg-header-desktop.svg'
import BackgroundMobile from '../assets/images/bg-header-mobile.svg'
import JobCard from '../components/JobCard'
import SearchBar from '../components/SearchBar'
import Data from '../data.json'
import { JobFilterContext } from '../context/JobFilterContext'
import { useAddFilter } from '../hooks/useAddFilter'
function Jobs() {
    const { state } = useContext(JobFilterContext)
    const { handleSetFilter } = useAddFilter()
    const jobbs = state.filters.length > 0 ? state.filteredData : Data
    return (
        <div className='relative'>
            <div className="w-full bg-primary-green-400 relative -z-1">
                <img src={BackgroundDesktop} alt="background" className='object-cover md:block hidden w-full' />
                <img src={BackgroundMobile} alt="background" className='object-cover md:hidden block w-full' />
            </div>
            {state.filters.length > 0 && <SearchBar />}
            <div className="max-w-6xl m-auto w-full px-4 py-20">
                <div className="grid md:gap-6 gap-15">
                    {jobbs && (
                        jobbs.map(item => {
                            return <JobCard item={item} key={item.id} handleSetFilter={handleSetFilter} />
                        })
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Jobs