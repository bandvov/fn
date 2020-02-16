import React from 'react'
import './Item.css'
const ProductListItem = (props) => {
    const { price, description, itemImg } = props.item
    return (
        <div className="col s12 m4 center-align">
            <div className="card" >
                <span className="price">{price}</span>
                <div className="card-content" style={{padding:'1.5rem 1rem 0.5rem',outline: '2px solid black'}} >
                    <div className="product-image">
                        <img src={itemImg} alt="product" />
                    </div>
                    <div className="card-action" style={{padding:'0.5rem 0 '}}>
                       <a href="http://google.com"> <button className="btn-large center-align white black-text" style={{margin:0,width:'100%',boxShadow:'0 0 0.2rem 0 black'}}>{description}</button></a>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default ProductListItem