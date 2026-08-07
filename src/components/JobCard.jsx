

function JobCard({ item, handleSetFilter }) {
    return (
        <div className={`bg-white p-6 relative rounded-md shadow-md ${item.featured ? 'border-l-4' : 'border-l-0'} border-primary-green-400`}>
            <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
                <div className="flex md:flex-row flex-col gap-4 items-stretch">
                    <img src={item.logo} alt="Logo" className='object-contain md:h-auto md:w-auto self-start md:mt-0 -mt-15 h-20' />
                    <div className='flex flex-col gap-2'>
                        <div className="flex gap-4">
                            <p className='text-primary-green-400 font-semibold'>{item.company}</p>
                            {item.new && (
                                <div className="bg-primary-green-400 text-white 
                            px-2 text-sm py-1 rounded-2xl uppercase">new!</div>
                            )}
                            {item.featured && (
                                <div className="bg-black text-white 
                            px-2 text-sm py-1 rounded-2xl uppercase">featured</div>
                            )}
                        </div>
                        <p className='font-bold'>{item.position}</p>
                        <div className="flex gap-4 items-center text-grey text-sm">
                            <p>{item.postedAt}</p>
                            <span className="self-center">&bull;</span>
                            <p>{item.contract}</p>
                            <span className="self-center">&bull;</span>
                            <p>{item.location}</p>
                        </div>
                    </div>
                </div>
                <div className='bg-grey/30 h-px w-full md:hidden block'></div>
                <div className="flex gap-4 flex-wrap md:justify-end w-full md:w-auto max-w-full md:max-w-xl">
                    <button onClick={()=>handleSetFilter(item.role)} className='text-primary-green-400 cursor-pointer md:text-sm bg-background-green font-semibold py-1 px-2'>{item.role}</button>
                    <button onClick={()=>handleSetFilter(item.level)} className='text-primary-green-400 cursor-pointer md:text-sm bg-background-green font-semibold py-1 px-2'>{item.level}</button>
                    {item.languages.map((item, key) => <button key={key} onClick={()=>handleSetFilter(item)} className='text-primary-green-400 cursor-pointer md:text-sm bg-background-green font-semibold py-1 px-2'>{item}</button>)}
                </div>
            </div>
        </div>
    )
}

export default JobCard