import React from 'react'

const FilterItemsOne = () => {
  return (
    <div className="col s12 filter-item" >
      <p ><i className="material-icons plus-button">add</i></p>
      <label>
        <input type="checkbox" />
        <span>case1</span>
      </label>
      <label>
        <input type="checkbox" />
        <span>case2</span>
      </label>
      <label>
        <input type="checkbox" />
        <span>case3</span>
      </label>
      <label>
        <input type="checkbox" />
        <span>case4</span>
      </label>
      <label>
        <input type="checkbox" />
        <span>case5</span>
      </label>
    </div>
  )
}
export default FilterItemsOne