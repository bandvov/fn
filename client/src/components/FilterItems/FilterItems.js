import React from 'react'
import FilterItemsOne from '../FilterItemsOne'
import FilterItemsTwo from '../FilterItemsTwo'
import FilterItemsThree from '../FilterItemsThree'

import './FilterItems.css'

const FilterItems = () => {
    return (
        <div className="row">
            <div style={{marginTop:'0.8rem'}} >

                    <fieldset className="card-content" style={{ position: 'relative' }}>
                        <legend style={{ padding: '0 0.5rem' }}>filter</legend>
                            <FilterItemsOne />
                      
                                   <FilterItemsTwo />
                            <FilterItemsThree />
                   
                    </fieldset>
                </div>
        </div>
    )
}
export default FilterItems