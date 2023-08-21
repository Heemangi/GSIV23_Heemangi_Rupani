import React from 'react';
import './style.css';
const SearchBarCardComponents = ({searchValue, setSearchValue, typeValue, setTypeValue, filterData})=>{
    
    const changeSearchHandle = (e)=>{
        setSearchValue(e.target.value)
    }
    const changeValueHandler = (e)=>{
        console.log(e.target.value)
        setTypeValue(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        filterData()
    }
    return (
        <>
            <div className='searchBox'>
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <input type="search" value={searchValue} onChange={changeSearchHandle} placeholder="Search" />
                        <input type="submit"  value="FIND" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default SearchBarCardComponents;