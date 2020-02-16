import React from 'react'
import FilterItemsOne from '../FilterItemOne'
import FilterItemsTwo from '../FilterItemTwo'
import FilterItemsThree from '../FilterItemThree'

const FilterItems = () => {
    return (
        <div className="row">
            <div style={{marginTop:'0.8rem'}} >

                    <fieldset className="card-content" style={{ position: 'relative' }}>
                        <legend style={{ padding: '0 0.5rem' }}>filter</legend>
                        <fieldset>
                            <FilterItemsOne />
                            <legend><i className="" style={{padding:'0 0.5rem',fontSize:'2rem', outline: '2px solid black'}}>+</i></legend>
                        </fieldset>
                        <fieldset>
                            <legend><i className="" style={{padding:'0 0.5rem',fontSize:'2rem', outline: '2px solid black'}}>+</i></legend>
                            <FilterItemsTwo />
                        </fieldset>
                        <fieldset>
                            <legend><i className="" style={{padding:'0 0.5rem',fontSize:'2rem', outline: '2px solid black'}}>+</i></legend>
                            <FilterItemsThree />
                        </fieldset>
                    </fieldset>
                </div>
        </div>
    )
}
export default FilterItems