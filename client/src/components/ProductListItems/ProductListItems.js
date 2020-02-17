import React from 'react'
import ProductListItem from '../ProductListIem'

const ProductListItems = (props) => {
    const { items } = props
    console.log(items);

    return (
        <div className="row">
            <div className="col s12">
                <div className="card"></div>
                {
                    items.map((elem) => {
                        return (
                            <div key={elem.key} >
                                <ProductListItem item={elem} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default ProductListItems